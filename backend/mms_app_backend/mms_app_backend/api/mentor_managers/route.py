from fastapi import Response, Depends, APIRouter, status
from sqlalchemy.orm import Session

from .constants import GET_MENTOR_MANAGERS_SUCCESSFUL_MESSAGE
from .crud import get_mentor_managers_crud
from .responses import GetMentorManagersResponse
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_db, get_token

router = APIRouter()

get = router.get


@get('/users/mentor-managers', status_code=status.HTTP_200_OK, response_model=GetMentorManagersResponse)
def get_mentor_managers(response: Response, db: Session = Depends(get_db), jwt_token: str = get_token):
    get_mentor_managers_response = GetMentorManagersResponse()
    user = verify_access_token(db, jwt_token)
    if not user:
        get_mentor_managers_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return get_mentor_managers_response

    mentor_managers = get_mentor_managers_crud(db)

    if mentor_managers:
        get_mentor_managers_response.success = True
        get_mentor_managers_response.data.mentor_managers = mentor_managers
        get_mentor_managers_response.message = GET_MENTOR_MANAGERS_SUCCESSFUL_MESSAGE
        return get_mentor_managers_response

