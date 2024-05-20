from flask import Blueprint, request, Response
from decorators import login_required
from utilities import query_db
from models.nanoid import NanoID
from pydantic import ValidationError
from utilities import InvalidRequest
from models.station import Station
import json

game = Blueprint('game', __name__, template_folder = 'templates')

@game.route('/start', methods=['DELETE'])
@login_required('admin')
def start_game():
    
    # body = json.loads(request.data.decode('utf-8'))
    
    # token=request.headers.get("Token") 
    # try:
    #     token_valid = NanoID(id=token)
    # except ValidationError as e:
    #     raise InvalidRequest(message=e.json(),code=400) 
    
    game=query_db(f"""SELECT start_game()""",one=True,format='json')
    
    return  Response(
      response=game,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )
    

@game.route('/end', methods=['POST'])
@login_required('admin')
def end_game():
    
    game=query_db(f"""SELECT end_game()""",one=True,format='json')
    
    # body = json.loads(request.data.decode('utf-8'))
    
    # token=request.headers.get("Token") 
    # try:
    #     token_valid = NanoID(id=token)
    # except ValidationError as e:
    #     raise InvalidRequest(message=e.json(),code=400) 
    
    return  Response(
      response=game,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )
    

@game.route('/pull', methods=['GET'])
def pull_game():
    
    # body = json.loads(request.data.decode('utf-8'))
    
    # token=request.headers.get("Token") 
    # try:
    #     token_valid = NanoID(id=token)
    # except ValidationError as e:
    #     raise InvalidRequest(message=e.json(),code=400) 
    
    game=query_db(f"""SELECT * from public.v_game""",one=False,format='json')
    
    return  Response(
      response=game,
      status=200,          
      mimetype='application/json;charset=utf-8',
    )