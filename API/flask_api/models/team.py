from datetime import datetime,date
from pydantic import BaseModel,Json, ConfigDict,field_validator
from typing import Union,Optional,Any,List
import json

class Teammates(BaseModel):
   # model_config  = ConfigDict(strict=True)
   
   name: str

class Team(BaseModel):
   name: str
   password: str
   teammates: List[Teammates] = None
   
   
   
   @field_validator('teammates',mode="after")
   @classmethod
   def parse_teammates(cls, v):
      
      if v is None:
         return None
      
      teammates_json_array = []
      
      for teammate in v:
         teammates_json_array.append(teammate.model_dump())
      
      # return str(v)
      return json.dumps(teammates_json_array)
      # elif isinstance(v, str):
      # if :
         
   

