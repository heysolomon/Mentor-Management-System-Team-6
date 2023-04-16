from fastapi import APIRouter, status, Depends, Response

from .constants import PROFILE_CREATED_SUCCESS_MESSAGE
from .crud import create_profile
from .responses import CreateProfileResponse
from .schemas import CreateProfile
from ..authentication.constants import INVALID_ACCESS_TOKEN_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db

router = APIRouter()

get = router.get
post = router.post


@post("/v1/users/profiles", status_code=status.HTTP_201_CREATED, response_model=CreateProfileResponse)
async def create_profile(profile: CreateProfile, response: Response, jwt_token=Depends(get_token), db=Depends(get_db)):
    """
    Create a new profile for a user after they have successfully signed up to the system.
    """
    profile_response = CreateProfileResponse()
    user = verify_access_token(db, jwt_token)
    if not user:
        profile_response.success = False
        profile_response.message = INVALID_ACCESS_TOKEN_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return profile_response
    created_profile = create_profile(profile, user)
    if created_profile:
        profile_response.message = PROFILE_CREATED_SUCCESS_MESSAGE
        profile_response.data.profile = created_profile

    return profile_response
