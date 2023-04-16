from fastapi import APIRouter, status, Depends, Response

from .constants import PROFILE_CREATED_SUCCESS_MESSAGE
from .constants import PROFILE_DOES_NOT_EXIST_MESSAGE, PROFILE_REQUEST_SUCCESS_MESSAGE, PROFILE_EXISTS_MESSAGE
from .crud import create_profile_crud, get_profile_crud
from .helpers import check_profile_exists
from .responses import CreateProfileResponse
from .schemas import CreateProfile
from ..authentication.constants import INVALID_ACCESS_TOKEN_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db

router = APIRouter()

get = router.get
post = router.post
put = router.put


@post("/v1/users/profiles", status_code=status.HTTP_201_CREATED, response_model=CreateProfileResponse)
async def create_profile(profile: CreateProfile, response: Response, db=Depends(get_db),
                         jwt_token=Depends(get_token())):
    """
    Create a new profile for a user after they have successfully signed up to the system.
    """
    profile_response = CreateProfileResponse()
    user = verify_access_token(db, jwt_token)
    if not user:
        profile_response.message = INVALID_ACCESS_TOKEN_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return profile_response
    if check_profile_exists(db, user):
        profile_response.message = PROFILE_EXISTS_MESSAGE
        response.status_code = status.HTTP_409_CONFLICT
        profile_response.data.profile = get_profile_crud(db, user)
        return profile_response
    created_profile = create_profile_crud(db, profile, user)
    if created_profile:
        profile_response.success = True
        profile_response.message = PROFILE_CREATED_SUCCESS_MESSAGE
        profile_response.data.profile = created_profile

    return profile_response


@get("/v1/users/profiles", status_code=status.HTTP_200_OK, response_model=CreateProfileResponse)
async def get_profile(response: Response, db=Depends(get_db), jwt_token=Depends(get_token())):
    """
    Get the users current profile.
    """
    profile_response = CreateProfileResponse()
    user = verify_access_token(db, jwt_token)

    if not user:
        profile_response.message = INVALID_ACCESS_TOKEN_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return profile_response
    if not check_profile_exists(db, user):
        profile_response.message = PROFILE_DOES_NOT_EXIST_MESSAGE
        response.status_code = status.HTTP_404_NOT_FOUND
        return profile_response
    profile = get_profile_crud(db, user)

    if profile:
        profile_response.success = True
        profile_response.data.profile = profile
        profile_response.message = PROFILE_REQUEST_SUCCESS_MESSAGE
        return profile_response
