from typing import TypedDict

from fastapi import status
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

from .constants import ACCOUNT_CREATED_MESSAGE
from .helpers import verify_password
from .models import User
from .responses import CreateUserResponse, UserData
from ...configs.database_config import engine
from ....main import app


class SignUpData(TypedDict):
    username: str
    email: str
    password: str
    first_name: str
    last_name: str


userbase = {
    'id': 1,
    "username": "test",
    "email": "ychag@example.com",
    "first_name": "test",
    "last_name": "test",
    "is_active": True,
}
user_success_data: UserData = {
    "user": User(**userbase)
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
    post_response = post('/user/signup',json=data)
    assert post_response.json().get('success') == True
    assert post_response.status_code == status.HTTP_201_CREATED
    user_id: int = post_response.json().get('data').get('user').get('id')
    successful_signup_response.data["user"]['id'] = user_id
    assert successful_signup_response.dict() == post_response.json()
    with Session(engine) as session:
        session.query(User).filter(User.id == user_id).delete()
        session.commit()


def test_unique_email():
    response = post('/user/signup',
                    json=data)
    user_email: str = response.json().get('data').get('user').get('email')
    user_id: int = response.json().get('data').get('user').get('id')
    with Session(engine) as session:
        query = session.query(User).filter(User.email == user_email)
        assert query.count() == 1

    new_data = data.copy()
    new_data['username'] = "second name"
    response = post('/user/signup', json=new_data)
    assert response.status_code == status.HTTP_409_CONFLICT
    assert response.json().get('success') == False
    with Session(engine) as session:
        session.query(User).filter(User.id == user_id).delete()
        session.commit()


def test_encrypted_password():
    post_response = post('/user/signup',json=data)
    assert post_response.json().get('success') == True
    assert post_response.status_code == status.HTTP_201_CREATED
    user_id: int = post_response.json().get('data').get('user').get('id')
    successful_signup_response.data["user"]['id'] = user_id
    assert successful_signup_response.dict() == post_response.json()
    with Session(engine) as session:
        password = session.query(User).filter(User.id == user_id).first().hashed_password
        assert verify_password(data.get('password'), password)
        session.query(User).filter(User.id == user_id).delete()
        session.commit()

def test_login():
    # Test case 1: User not found
    response = post("/user/login", json={"email": "invalidemail@example.com", "password": "password"})
    assert response.status_code == 404
    assert response.json()["success"] == False
    assert "access_token" not in response.json()["data"]
    assert "user" not in response.json()["data"]
    assert response.json()["message"] == "User not found"
    # Test case 2: Incorrect password
    response = post("/user/login", json={"email": "user@example.com", "password": "wronpassword"})
    assert response.status_code == 401
    assert response.json()["success"] == False
    assert "access_token" not in response.json()["data"]
    assert "user" not in response.json()["data"]
    assert response.json()["message"] == "The passwod provided is not correct"
    # Test case 1: Successful login
    response = client.post("/user/login", json={"email": "user@example.com", "password": "string"})
    assert response.status_code == 200
    assert response.json()["success"] == True
    assert "access_token" in response.json()["data"]
    assert "user" in response.json()["data"]
    assert response.json()["message"] == "The access_token has been created and user has logged In successfully"
