from datetime import datetime,date
from pydantic import BaseModel
from typing import Union,Optional


class Station(BaseModel):
   name: str
   password: str
   rules: Optional[str] = None

        