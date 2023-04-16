from typing import TypedDict

from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer
from ..configs.database_config import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_token():
    return OAuth2PasswordBearer(tokenUrl='Token')

class ResponseModel(BaseModel):
    success: bool = False
    data: dict | None
    message: str | None


class EmptyDict(TypedDict):
    pass
