from fastapi import FastAPI, Request
from mangum import Mangum
from routers import sample
from routers import holdImage

app = FastAPI()

## Middleware
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-Process-Time"] = "0.5"
    response.headers["Cache-Control"] = "no-cache, no-store"
    response.headers["Allow"] = "GET, POST, PUT, DELETE, OPTIONS"
    return response

app.include_router(sample.router)
app.include_router(holdImage.router)

handler = Mangum(app)
