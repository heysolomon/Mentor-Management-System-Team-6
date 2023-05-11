from fastapi import APIRouter, status, Depends, Response
from sqlalchemy.orm import Session

from .constants import GET_MENTORS_SUCCESSFUL_MESSAGE, CREATED_MENTOR_SUCCESSFUL_MESSAGE
from .crud import get_mentors_crud, create_mentor_user
from .responses import GetMentorsResponse, CreateMentorResponse
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from  .schemas import  CreateMentor
from ..utils import get_db, get_token

router = APIRouter()
get = router.get
post = router.post


@get('/users/mentors', status_code=status.HTTP_200_OK, response_model=GetMentorsResponse)
async def get_mentors(response: Response, db: Session = Depends(get_db), jwt_token: str = Depends(get_token())):
    get_mentors_response = GetMentorsResponse()
    user = verify_access_token(db, jwt_token)
    if not user:
        get_mentors_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return get_mentors_response

    mentors = get_mentors_crud(db)
    get_mentors_response.success = True
    get_mentors_response.message = GET_MENTORS_SUCCESSFUL_MESSAGE
    get_mentors_response.data.mentors = mentors
    return get_mentors_response

@post('/user/mentor', response_model=CreateMentorResponse, status_code=status.HTTP_201_CREATED)
async def create_mentor(mentor: CreateMentor, response: Response, db: Session = Depends(get_db)):
    mentor_response = CreateMentorResponse()
    created_mentor_user = create_mentor_user(db, mentor)
    if created_mentor_user:
        mentor_response.success = True
        mentor_response.data.mentor = created_mentor_user
        mentor_response.message = CREATED_MENTOR_SUCCESSFUL_MESSAGE
        return mentor_response
