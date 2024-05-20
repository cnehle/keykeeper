from flask import Blueprint, request, Response
from decorators import login_required
from utilities import query_db,ValidationError,InvalidRequest
from models.nanoid import NanoID
import json

challenge = Blueprint('challenge', __name__, template_folder = 'templates')


@challenge.route('/start', methods=['PUT'])
# @login_required('admin')
def start_challenge():
    
    body = json.loads(request.data.decode('utf-8'))
    
    token=request.headers.get("Token") 
    try:
        token_valid = NanoID(id=token)
    except ValidationError as e:
        raise InvalidRequest(message=e.json(),code=400) 
    
    challenge=query_db(f"""SELECT public.action_challenge(
	%s, 
	%s, 
	%s, 
	%s
    )""",args=[1,token_valid.id,body['team_name'],None],one=True,format='json')
    
    return  Response(
      response=challenge,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )
    

@challenge.route('/end', methods=['PUT'])
# @login_required('keykeeper')
def end_challenge():
    
    body = json.loads(request.data.decode('utf-8'))
    
    token=request.headers.get("Token") 
    try:
        token_valid = NanoID(id=token)
    except ValidationError as e:
        raise InvalidRequest(message=e.json(),code=400) 
    
    challenge=query_db(f"""SELECT public.action_challenge(
	%s, 
	%s, 
	%s, 
	%s
    )""",args=[2,token_valid.id,body['team_name'],None],one=True,format='json')
    
    return  Response(
      response=challenge,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )
    
@challenge.route('/rate', methods=['PUT'])
# @login_required('keykeeper')
def rate_challenge():
    
    body = json.loads(request.data.decode('utf-8'))
    
    token=request.headers.get("Token") 
    try:
        token_valid = NanoID(id=token)
    except ValidationError as e:
        raise InvalidRequest(message=e.json(),code=400) 
    
    challenge=query_db(f"""SELECT public.action_challenge(
	%s, 
	%s, 
	%s, 
	%s
    )""",args=[3,token_valid.id,body['team_name'],body['score']],one=True,format='json')
    
    return  Response(
      response=challenge,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )


