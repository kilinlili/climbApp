from fastapi.testclient import TestClient
from backend.main import app
client = TestClient(app)


# python -m pytest src/test/test_test.py
def test_read_main():
    response = client.get("/testApi/test")
    assert response.status_code == 200
    assert response.json() == {"this": "test"}