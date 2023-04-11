from typing import TypedDict

from .schemas import User
from ..utils import ResponseModel


class UserData(TypedDict):
    user: User


class CreateUserResponse(ResponseModel):
    data: UserData
