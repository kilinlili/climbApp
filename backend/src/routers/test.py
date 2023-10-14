from enum import Enum
from fastapi import APIRouter, Request, Query
from pydantic import BaseModel

router = APIRouter()

@router.get("/testApi/test", tags=["test"])
async def test():
    return {"this": "test"}

class fruits(str, Enum):
    apple = "apple"
    orange = "orange"
    banana = "banana"

@router.get("/testApi/{item}", tags=["test"]) #path parameter
async def path_param(item: fruits):
    if item == fruits.apple:
        return {"item": "apple"}
    elif item == fruits.orange:
        return {"item": "orange"}
    elif item == fruits.banana:
        return {"item": "banana"}
    
from typing import Optional, Union

@router.post("/testApi/", tags=["test"]) #query parameter
async def query_param(aaa: str, bbb: Union[str, None] = None):# curl -X POST "http://localhost:8000/testApi/?aaa=aaa&bbb=bbb"
    return {"aaa": aaa, "bbb": bbb}
## bbb: Optional[str] = Noneの方がわかりやすいと思う。Union[str, None] = Noneは、Optional[str] = Noneのエイリアス

class Item(BaseModel):#pydantic model
    name: str
    price: float
    is_offer: Optional[bool] = None

@router.post("/testApi/testBody", tags=["test"]) #request body
async def request_body(item: Item):# curl -X POST "http://localhost:8000/testApi/testBody" -H "Content-Type: application/json" -H "Content-Type: application/json" -d '{"name":"pen","price":0,"is_offer":true}'
    return item

# path parameter + request body
@router.put("/testApi/put/{item_id}") # https://amzn.to/3EDqdye                      
async def create_item(item_id: str, item: Item):
    return {"item_id": item_id, **item.dict()}


@router.get("/items/")
async def read_items(q: Union[str, None] = Query(default=None, max_length=50)):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results