from typing import TypedDict
from ..utils import EmptyDict
from .schemas import User
from ..utils import ResponseModel


class UserData(TypedDict):
    user: User
    access_token: str


class CreateUserResponse(ResponseModel):
    data: UserData | EmptyDict = {}

class LoginUserResponse(ResponseModel):
    data: UserData | EmptyDict = {}