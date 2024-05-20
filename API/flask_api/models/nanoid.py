from pydantic import field_validator,BaseModel,Field

class NanoID(BaseModel):
   id: str = Field(min_length=12,max_length=12)

   @field_validator('id',mode="after")
   def parse_uid(cls, v):
      
      if v is None:
         return None
      else:
         return str(v)