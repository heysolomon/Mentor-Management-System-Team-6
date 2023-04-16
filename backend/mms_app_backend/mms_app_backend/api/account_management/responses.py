from pydantic import BaseModel

from .schemas import ViewProfile
from ..utils import ResponseModel


class ProfileData(BaseModel):
    profile : ViewProfile|None


class CreateProfileResponse(ResponseModel):
    data : ProfileData = ProfileData()
