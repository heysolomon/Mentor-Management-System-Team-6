from pydantic import BaseModel

from .schemas import ViewProfile
from ..utils import ResponseModel


class ProfileData(BaseModel):
    profile = ViewProfile


class CreateProfileResponse(ResponseModel):
    data = ProfileData
