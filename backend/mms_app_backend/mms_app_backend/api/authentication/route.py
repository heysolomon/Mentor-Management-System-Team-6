from fastapi import APIRouter, Depends, Response,status
from sqlalchemy.orm import Session

from .constants import USED_EMAIL_MESSAGE
from .crud import get_user_by_email, create_user
from .responses import CreateUserResponse
from .schemas import UserCreate
from ..constants import GENERAL_ERROR_MESSAGE
from ..utils import get_db
from ...configs.database_config import engine, Base

Base.metadata.create_all(bind=engine)
router = APIRouter()
post = router.post


@post("/user/signup", response_model=CreateUserResponse)
def signup(user: UserCreate, response: Response, db: Session = Depends(get_db)):
    user_response = CreateUserResponse()
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        user_response.message = USED_EMAIL_MESSAGE
        response.status_code = status.HTTP_409_CONFLICT
        return user_response
    user = create_user(db=db, user=user)
    if user:
        user_response.success = True
        user_response.data['user'] = user
    else:
        user_response.message = GENERAL_ERROR_MESSAGE
        response.status_code = status.HTTP_400_BAD_REQUEST
    return user_response
