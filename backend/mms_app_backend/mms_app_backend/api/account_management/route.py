from fastapi import APIRouter, status, Depends

from .crud import create_profile
from .schemas import CreateProfile
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db
from .responses import CreateProfileResponse
router = APIRouter()

get = router.get
post = router.post


@post("/create-profile", status_code=status.HTTP_201_CREATED, response_model=CreateProfileResponse)
async def create_profile(profile: CreateProfile, jwt_token=Depends(get_token), db=Depends(get_db)):
    """
    Create a new profile for a user after they have successfully signed up to the system.
    """
    profile_response = CreateProfileResponse()
    user = verify_access_token(db, jwt_token)
    if not user:
        profile_response.success = False

    created_profile = create_profile(profile)

    return profile
