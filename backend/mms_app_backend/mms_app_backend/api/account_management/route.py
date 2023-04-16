from fastapi import APIRouter, status, Depends

from .crud import create_profile
from .schemas import CreateProfile
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db

router = APIRouter()

get = router.get
post = router.post


@post("/create-profile", status_code=status.HTTP_201_CREATED, response_model=CreateProfile)
async def create_profile(profile: CreateProfile, jwt_token=Depends(get_token), db=Depends(get_db)):
    user = verify_access_token(db, jwt_token)
    if not user:
        pass
    created_profile = create_profile(profile)

    return profile
