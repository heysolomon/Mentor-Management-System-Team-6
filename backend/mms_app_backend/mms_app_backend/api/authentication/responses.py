from typing import TypedDict
from ..utils import EmptyDict
from .schemas import User
from ..utils import ResponseModel


class UserData(TypedDict):
    user: User


class CreateUserResponse(ResponseModel):
    data: UserData | EmptyDict = {}
