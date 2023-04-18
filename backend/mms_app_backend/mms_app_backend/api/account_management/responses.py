from pydantic import BaseModel

from .schemas import ViewProfile
from ..utils import ResponseModel
from fastapi_camelcase import CamelModel

class ProfileData(CamelModel):
    profile : ViewProfile|None


class CreateProfileResponse(ResponseModel):
    data : ProfileData = ProfileData()
