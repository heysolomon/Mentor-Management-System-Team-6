from fastapi import APIRouter
from .schemas import BaseProfile
router = APIRouter()

get = router.get
post = router.post

@post("/create-profile")
async def create_profile(profile:BaseProfile):

    return profile
