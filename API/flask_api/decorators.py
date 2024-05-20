from functools import wraps
from flask import request
from utilities import checkGroup,InvalidRequest
import json

def login_required(role):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            # print(request.headers)
            # print(request.data)
            
            if 'Token' in request.headers:
                checkGroup(role,token=request.headers.get("Token"))
            else:
                raise InvalidRequest('Token not found',400)
            
            print(f"Authentication {role} OK")
            
            return f(*args, **kwargs)
        return decorated_function
    return decorator
    
    
# def decorator_factory(argument):
#     def decorator(function):
#         def wrapper(*args, **kwargs):
#             funny_stuff()
#             something_with_argument(argument)
#             result = function(*args, **kwargs)
#             more_funny_stuff()
#             return result
#         return wrapper
#     return decorator