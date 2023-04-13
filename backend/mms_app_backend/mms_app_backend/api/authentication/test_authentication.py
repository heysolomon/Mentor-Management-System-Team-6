from fastapi.testclient import TestClient

from backend.mms_app_backend.main import app

client = TestClient(app)
post = client.post
get = client.get


def test_signup_noget():
    get_response = get('/user/signup')
    assert get_response.status_code == 405
    assert get_response.json() == {"detail": "Method Not Allowed"}

def test_user_signup():
    pass

def test_unique_email():
    pass

def test_encrypted_password():
    pass

def test_user_names():
    pass

