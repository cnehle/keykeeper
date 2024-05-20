from flask import Blueprint, request, Response
from decorators import login_required
from utilities import query_db
from models.nanoid import NanoID
from pydantic import ValidationError
from utilities import InvalidRequest
from models.station import Station
import json

station = Blueprint('station', __name__, template_folder = 'templates')

# Таблица для всех
@station.route('/pull', methods=['GET'])
def pull_stations():
   
   sql = f"""SELECT id, name, taken, rules, queue
	            FROM public.station;"""
   
   response=query_db(query=sql)

   response = Response(
      response=response,
      status=200,
      mimetype='application/json;charset=utf-8',
   )

   return response

# Для админа(содержит пароли)
@station.route('/list', methods=['GET'])
@login_required('admin')
def list_stations():
   
   sql = f"""SELECT id, name, rules, password, token
	              FROM public.dic_station;"""
   
   response=query_db(query=sql)

   response = Response(
      response=response,
      status=200,
      mimetype='application/json;charset=utf-8',
   )

   return response

@station.route( '/add',methods=['POST'])
@login_required('admin')
def add_station():
    
    
    try:
      station_valid = Station.model_validate_json(request.data.decode('utf-8'))
    except ValidationError as e:
      raise InvalidRequest(message=e.json(), code=400)

    station=query_db(f"""select public.dic_station_modify(%s,%s,%s,%s,%s) as id"""
                  ,args=[1,None,station_valid.name,station_valid.password,station_valid.rules],one=True,format='json')

    return  Response(
      response=station,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )
    pass
  
@station.route( '/<id>',methods=['PUT'])
@login_required('admin')
def edit_station(id):
    
    try:
      station_valid = Station.model_validate_json(request.data.decode('utf-8'))
    except ValidationError as e:
      raise InvalidRequest(message=e.json(), code=400)

    station=query_db(f"""select public.dic_station_modify(%s,%s,%s,%s,%s) as id"""
                  ,args=[2,id,station_valid.name,station_valid.password,station_valid.rules],one=True,format='json')

    return  Response(
      response=station,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )


@station.route( '/<id>',methods=['GET'])
def get_station(id):
    
    # try:
    #   station_valid = Station.model_validate_json(request.data.decode('utf-8'))
    # except ValidationError as e:
    #   raise InvalidRequest(message=e.json(), code=400)

    station=query_db(f"""select * FROM public.station where id = %s"""
                  ,args=[id],one=True,format='json')

    return  Response(
      response=station,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )


@station.route( '/next',methods=['POST'])
def next_station():
    
    token=request.headers.get("Token") 
    try:
        token_valid = NanoID(id=token)
    except ValidationError as e:
        raise InvalidRequest(message=e.json(),code=400) 
    
    station=query_db(f"""select public.get_next_station(%s) as name"""
                  ,args=[token_valid.id],one=True,format='json')
    
    return  Response(
      response=station,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )
    pass

@station.route('/token', methods=['POST'])
# @login_required('keykeeper')
def get_station_token():
    try:
      password = str(json.loads(request.data.decode('utf-8'))['password'])
      # name = str(json.loads(request.data.decode('utf-8'))['station_name'])
    except:
       raise InvalidRequest('password has an incorrect format',400)

    station_token=query_db(f"""select * 
                            from dic_station 
                            where  password = %s"""
                  ,args=[password],one=True,format='dict')
    
    if station_token is None:
        raise InvalidRequest('Authorization Failed',401)

    return  Response(
      response=json.dumps(station_token),
      status=200,          
      mimetype='application/json;charset=utf-8',
    )