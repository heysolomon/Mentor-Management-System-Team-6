from typing import TypedDict
from sqlalchemy.orm import Session
from fastapi import status,Depends
from fastapi.testclient import TestClient

from backend.mms_app_backend.main import app
from .constants import ACCOUNT_CREATED_MESSAGE
from .responses import CreateUserResponse,UserData
from ..utils import get_db
from .models import User
from ...configs.database_config import engine

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
    user_id:int = int(post_response.json().get('data').get('user').get('id'))
    successful_signup_response.data["user"]['id'] = user_id
    assert successful_signup_response.dict() == post_response.json()
    with Session(engine) as session:
        session.query(User).filter(User.id == user_id).delete()
        session.commit()

def test_unique_email():
    pass


def test_encrypted_password():
    pass


def test_user_names():
    pass
