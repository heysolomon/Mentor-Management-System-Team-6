from fastapi import APIRouter,status
from .schemas import CreateProfile
router = APIRouter()

get = router.get
post = router.post

@post("/create-profile",status_code=status.HTTP_201_CREATED,response_model=CreateProfile)
async def create_profile(profile:CreateProfile):
    created_profile = create_profile()
    return profile
