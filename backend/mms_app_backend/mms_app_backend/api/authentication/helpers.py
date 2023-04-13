import os
import jwt
import asyncio
from .constants import PASSWORD_CONTEXT

from dotenv import load_dotenv
#Load Environment variables from .env file to Enviroment
load_dotenv()
secret = os.environ['SECRET']


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return PASSWORD_CONTEXT.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return PASSWORD_CONTEXT.hash(password)


def create_access_token(data: dict):
    return jwt.encode(data, secret, algorithm="HS256")