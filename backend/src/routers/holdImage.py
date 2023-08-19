from fastapi import APIRouter, Form
from pydantic import BaseModel
import boto3
import botostubs

router = APIRouter()

s3 = boto3.client('s3')


class Image(BaseModel):
    image: str
    name: str


@router.post("/holdImageApi/image/upload", tags=["holdImage"])
async def imageUpload(image: Image):
    responce = s3.put_object(Bucket='hold-image-bucket', Key='hold-image-raw' + image.name, Body=image.image)




    return {"this": "test"}
