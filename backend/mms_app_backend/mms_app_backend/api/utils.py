from fastapi import Cookie, Query, WebSocketException, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel

from ..configs.database_config import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_token():
    return OAuth2PasswordBearer(tokenUrl="/users/login")


async def get_cookie_or_token(
        session: Cookie() | None,
        token: Query() | None,
):
    if session is None and token is None:
        raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)
    return session or token


class ResponseModel(BaseModel):
    success: bool = False
    data: dict | None
    message: str | None
