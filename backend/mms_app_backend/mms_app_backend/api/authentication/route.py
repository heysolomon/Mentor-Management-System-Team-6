from fastapi import APIRouter, Depends, Response, status
from sqlalchemy.orm import Session

from .constants import USED_EMAIL_MESSAGE, ACCOUNT_CREATED_MESSAGE
from .crud import get_user_by_email, create_user,get_user_by_username
from .responses import CreateUserResponse
from .schemas import UserCreate
from ..constants import GENERAL_ERROR_MESSAGE
from ..utils import get_db
from ...configs.database_config import engine, Base

Base.metadata.create_all(bind=engine)
router = APIRouter()
post = router.post


@post("/user/signup", response_model=CreateUserResponse, status_code=status.HTTP_201_CREATED)
def signup(user: UserCreate, response: Response, db: Session = Depends(get_db)) -> Response:
    """
    This endpoint validates the user email and creates and bcrypt encrypted password.
    This helps the user get started on the platform.
    """
    user_response = CreateUserResponse()
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        user_response.message = USED_EMAIL_MESSAGE
        response.status_code = status.HTTP_409_CONFLICT
        return user_response
    db_user = get_user_by_username(db, username=user.username)
    if db_user:
        user_response.message = USED_EMAIL_MESSAGE
        response.status_code = status.HTTP_409_CONFLICT
        return user_response
    user = create_user(db=db, user=user)
    if user:
        user_response.success = True
        user_response.data['user'] = user
        user_response.message = ACCOUNT_CREATED_MESSAGE
    else:
        user_response.message = GENERAL_ERROR_MESSAGE
        response.status_code = status.HTTP_400_BAD_REQUEST
    return user_response
