from fastapi import FastAPI, Request
from mangum import Mangum
from routers import test, holdImage

app = FastAPI()

@app.get("/sampleApi1/{id}")
async def read_item(id: int):
    return {"id": id}

@app.get("/sampleApi2/hello")
async def hello():
    return {"message": "Hello"}


## Middleware
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-Process-Time"] = "0.5"
    response.headers["Cache-Control"] = "no-cache, no-store"
    response.headers["Allow"] = "GET, POST, PUT, DELETE, OPTIONS"
    return response

app.include_router(test.router)
app.include_router(holdImage.router)

handler = Mangum(app)
