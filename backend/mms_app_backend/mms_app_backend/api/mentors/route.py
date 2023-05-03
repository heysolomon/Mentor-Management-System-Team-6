from fastapi import APIRouter, status, Depends, Response
from sqlalchemy.orm import Session

from .constants import GET_MENTORS_SUCCESSFUL_MESSAGE
from .crud import get_mentors_crud
from .responses import GetMentorsResponse
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_db, get_token

router = APIRouter()
get = router.get


@get('/users/mentors', status_code=status.HTTP_200_OK, response_model=GetMentorsResponse)
async def get_mentors(response: Response, db: Session = Depends(get_db), jwt_token: str = Depends(get_token())):
    get_mentors_response = GetMentorsResponse()
    user = verify_access_token(db, jwt_token)
    if not user:
        get_mentors_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return get_mentors_response

    mentors = get_mentors_crud(db)
    if mentors:
        get_mentors_response.success = True
        get_mentors_response.message = GET_MENTORS_SUCCESSFUL_MESSAGE
        get_mentors_response.data.mentors = mentors
        return get_mentors_response
