from flask import Blueprint, request, Response
from decorators import login_required
from utilities import query_db
from models.nanoid import NanoID
from pydantic import ValidationError
from utilities import InvalidRequest
from models.team import Team

import json

team = Blueprint('team', __name__, template_folder = 'templates')

@team.route( '/add', methods=['POST'])
@login_required('keykeeper')
def add_team():
		# print(request.data.decode('utf-8'))
		# print(request.headers)

	try:
		team_valid = Team.model_validate_json(request.data.decode('utf-8'))
	except ValidationError as e:
		raise InvalidRequest(message=e.json(), code=400)
	
	print(team_valid)

	team_id=query_db(f"""select public.dic_team_modify(%s,%s,%s,%s,%s::jsonb) as id"""
								,args=[3,None,team_valid.name,team_valid.password,team_valid.teammates],one=True,format='json')

	response = Response(
		response=team_id,
		status=200,          
		mimetype='application/json;charset=utf-8',
	)
	# response.headers.add('Access-Control-Allow-Origin', '*')
	return  response
	pass
 


@team.route('/<id>',methods=['PUT'])
# @login_required('keykeeper')
def edit_team(id):
		
	try:
		team_valid = Team.model_validate_json(request.data.decode('utf-8'))
	except ValidationError as e:
		raise InvalidRequest(message=e.json(), code=400)

	team = query_db(f"""select public.dic_team_modify(%s,%s,%s,%s,%s::jsonb) as id"""
								,args=[2,id,team_valid.name,team_valid.password,team_valid.teammates],one=True,format='json')

	
	return  Response(
		response=team,
		status=200,          
		mimetype='application/json;charset=utf-8',
	)
	pass
	
@team.route('/pull', methods=['GET'])
def get_teams():
	 
	sql = f"""SELECT id, name, passed_station, time_sum, total_score
							FROM public.team;"""
	 
	response=query_db(query=sql)

	response = Response(
			response=response,
			status=200,
			mimetype='application/json;charset=utf-8',
	)

	return response

@team.route('/token', methods=['POST'])
# @login_required('keykeeper')
def get_team_token():
	
	try:
		password = str(json.loads(request.data.decode('utf-8'))['password'])
		# name = str(json.loads(request.data.decode('utf-8'))['team_name'])
	except:
		raise InvalidRequest('password has an incorrect format',400)

	team_token=query_db(f"""select *
							from dic_team 
							where password = %s"""
					,args=[password],one=True,format='dict')
		
	if team_token is None:
			raise InvalidRequest('Authorization Failed',401)

	return  Response(
		response=json.dumps(team_token),
		status=200,          
		mimetype='application/json;charset=utf-8',
	)
		
@team.route('/', methods=['GET'])
def get_team():
	
	if 'Token' in request.headers:
		try:
			token_valid = NanoID(id=request.headers.get("Token"))
		except ValidationError as e:
			raise InvalidRequest(message=e.json(),code=400)
	else:
		raise InvalidRequest('Token not found',400)
	
	# print(token_valid.id)
 
	sql = f"""select t.id, t.name, passed_station ,time_sum ,total_score 
							from public.team t
							left join public.dic_team dt on t.id = dt.id 
							where dt.token = %s
						 ;"""
	 
	response=query_db(query=sql, args=[token_valid.id], one=True)
 
	# print(response)

	response = Response(
			response=response,
			status=200,
			mimetype='application/json;charset=utf-8',
	)

	return response



