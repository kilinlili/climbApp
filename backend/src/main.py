from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()


@app.get("/sample/{id}")
async def read_item(id: int):
    return {"id": id}

handler = Mangum(app)
