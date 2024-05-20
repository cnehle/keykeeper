import psycopg2
import datetime
import os
import json

from models.nanoid import NanoID
from pydantic import ValidationError

class InvalidRequest(Exception):
    def __init__(self,message, code):
        Exception.__init__(self)
        self.message = message
        self.code = code

    def to_dict(self):
        d = dict()
        d['error']= self.message
        return d
    
    
def connectPG():
    try:
    # пытаемся подключиться к базе данных
        print("BEGIN CONNECT: ", datetime.datetime.now())

        conn = psycopg2.connect(dbname=os.getenv('PG_DATABASE'), 
                                user=os.getenv('PG_USER'), 
                                password=os.getenv('PG_PASS'), 
                                host=os.getenv('PG_HOST')
                                )
        print("END CONNECT: ", datetime.datetime.now())
        print("Connection success")
        return conn
    except Exception as e:
        raise InvalidRequest(message=f"DB connection error:\n {e}",code=500)
    
    
def query_db(query, args=(), one=False,format='json'):
    cur = connectPG().cursor()
    try:
        cur.execute(query, args)
        cur.connection.commit()
    except psycopg2.Error as e:
        if cur.connection: cur.connection.rollback()
        raise InvalidRequest(message=f"Bad SQL request:\n {e}",code=400)
    
    if cur.pgresult_ptr is not None:
        r = [dict((cur.description[i][0], value) \
                for i, value in enumerate(row)) for row in cur.fetchall()]
        
        cur.connection.close()
        if format == 'json':
            
            result = json.dumps((r[0] if r else None) if one else r, default=str)
            
        elif format == 'dict':
            result = (r[0] if r else None) if one else r
    else: result = None
    return result


def checkGroup(group, token):
    
    try:
        token_valid = NanoID(id=token)
    except ValidationError as e:
        raise InvalidRequest(message=e.json(),code=400)
    
    check=query_db(f"""select public.check_group(%s,%s) as flag"""
                  ,args=[group,token_valid.id],one=True,format='dict')
    #check_group()
    
    if not check['flag']:
        raise InvalidRequest('Authorization Failed',401)
    