from typing import TypedDict

from fastapi import status
from fastapi.testclient import TestClient
from .schemas import User
from backend.mms_app_backend.main import app
from .constants import ACCOUNT_CREATED_MESSAGE
from .responses import CreateUserResponse,UserData


class SignUpData(TypedDict):
    username: str
    email: str
    password: str
    first_name: str
    last_name: str

userbase = {
    'id' :1,
    "username": "test",
    "email": "ychag@example.com",
    "first_name": "test",
    "last_name": "test",
    "is_active": True,
}
user_success_data:UserData = {
    "user":User(**userbase)
}

successful_signup_response: CreateUserResponse = CreateUserResponse(success=True, message=ACCOUNT_CREATED_MESSAGE,
                                                                    data=user_success_data)

client = TestClient(app)
post = client.post
get = client.get

data: SignUpData = {
    "username": "test",
    "email": "ychag@example.com",
    "password": "test",
    "first_name": "test",
    "last_name": "test"
}


def test_signup_noget():
    get_response = get('/user/signup')
    assert get_response.status_code == status.HTTP_405_METHOD_NOT_ALLOWED
    assert get_response.json() == {"detail": "Method Not Allowed"}


def test_user_signup():
    post_response = post('/user/signup',
                         json=data)
    assert post_response.json().get('success') == True
    assert post_response.status_code == status.HTTP_201_CREATED
    successful_signup_response.data["user"]['id'] = post_response.json().get('data').get('user').get('id')
    assert successful_signup_response.dict() == post_response.json()


def test_unique_email():
    pass


def test_encrypted_password():
    pass


def test_user_names():
    pass
