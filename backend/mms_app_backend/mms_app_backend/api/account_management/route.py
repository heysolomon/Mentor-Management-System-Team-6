from fastapi import APIRouter, status, Depends

from .crud import create_profile
from .schemas import CreateProfile
from ..utils import get_token

router = APIRouter()

get = router.get
post = router.post


@post("/create-profile", status_code=status.HTTP_201_CREATED, response_model=CreateProfile)
async def create_profile(profile: CreateProfile, jwt_token=Depends(get_token)):
    created_profile = create_profile(profile)

    return profile
