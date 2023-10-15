import pytest
from fastapi.testclient import TestClient
from main import app
client = TestClient(app)


# python -m pytest src/test/test_test.py
def test_sampleApi():
    response = client.get("/sampleApi/sample")
    assert response.status_code == 200
    assert response.json() == {"this": "sample"}