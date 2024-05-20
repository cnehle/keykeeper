from flask import Flask,g, request, url_for,jsonify
from dotenv import load_dotenv

from routes.station import station
from routes.auth import auth
from routes.team import team
from routes.challenge import challenge
from routes.game import game
from flask_cors import CORS

from utilities import InvalidRequest,connectPG

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

CORS(app)

def option_todo(id): 
  return '', 204 
 
app.add_url_rule('/', view_func=option_todo, provide_automatic_options=False, methods=['OPTIONS']) 
app.add_url_rule(r'/<path:path>', view_func=option_todo, provide_automatic_options=False, methods=['OPTIONS']) 

@app.after_request
def after_request(response):
  response.headers['Access-Control-Allow-Methods']='*'
  response.headers['Access-Control-Allow-Origin']='*'
  response.headers["Access-Control-Allow-Headers"] = "Content-Type, X-Requested-With, Token, ngrok-skip-browser-warning"
  response.headers['Vary']='Origin'
  return response

app.register_blueprint(team, url_prefix='/API/v1/team')
app.register_blueprint(station, url_prefix='/API/v1/station')
app.register_blueprint(challenge, url_prefix='/API/v1/challenge')
app.register_blueprint(auth, url_prefix='/API/v1/auth')
app.register_blueprint(game, url_prefix='/API/v1/game')


# @app.after_request
# def handle_options(response):
#     response.headers["Access-Control-Allow-Origin"] = "*"
#     response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
#     response.headers["Access-Control-Allow-Headers"] = "Content-Type, X-Requested-With"
#     return response

@app.route('/API/v1/hi', methods=['GET'])
def say_hi():
    return jsonify(say="hi")

@app.route('/API/dbping', methods=['GET'])
def db_ping():
    conn = connectPG()
    cur = conn.cursor()
    pong = str(conn)
    cur.connection.close()
    return jsonify(pong=pong)

@app.errorhandler(InvalidRequest)
def handle_error(e):
    
   print(f'!!! Error Handler: {e.to_dict()}')
   if hasattr(request, 'url'): print(f'URL: {request.url}')
   if hasattr(request, 'headers'): print(f'Headers: {request.headers}')
   try:
      if hasattr(request, 'json'): print(f'Body: {request.json}')
   except:
      pass
#    print(f'URL: {request.__dict__['url']}')
#    print()
#    print(f'Headers: {request.__dict__['headers']}')
#    print()
#    print(f'data: {request.__dict__['data']}')
   
   
   response = jsonify(e.to_dict())
   response.status_code = e.code

   return response

if __name__ == "__main__":
   print("Start")
   load_dotenv()
   

   app.run(host="0.0.0.0", port=5000 ,debug=False, threaded=True)