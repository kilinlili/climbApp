from fastapi import APIRouter, Form
from pydantic import BaseModel
import boto3
import base64

router = APIRouter()

s3 = boto3.client('s3')


class upload_request_body(BaseModel):
    image: str #base64
    name: str


@router.post("/holdImageApi/image/upload", tags=["holdImage"])
async def imageUpload(body: upload_request_body):
    base64_data = body.image.split('data:image/jpeg;base64,')[1]
    image_name = body.name
    image_data = base64.b64decode(base64_data)
    responce = s3.put_object(Bucket='hold-image-bucket', Key='hold-image-raw/' + image_name, Body=image_data)
    return {"image": "upload success", "responce": responce}
