from fastapi import FastAPI
from mangum import Mangum
from routers import sample

app = FastAPI()

@app.get("/sampleApi1/{id}")
async def read_item(id: int):
    return {"id": id}

@app.get("/sampleApi2/hello")
async def hello():
    return {"message": "Hello"}

app.include_router(sample.router)

handler = Mangum(app)
