import profile

from ..utils import ResponseModel
from .schemas import ViewProfile
class ProfileData():
    profile = ViewProfile
class CreateProfileResponse(ResponseModel):
    data = ProfileData