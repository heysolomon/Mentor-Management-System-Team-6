from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .crud import get_user_by_email, create_user
from .responses import CreateUserResponse
from .schemas import UserCreate
from ..utils import get_db
from ...configs.database_config import engine, Base
from .constants import USED_EMAIL_MESSAGE
from ..constants import GENERAL_ERROR_MESSAGE
Base.metadata.create_all(bind=engine)
router = APIRouter()
post = router.post


@post("/user/signup", response_model=CreateUserResponse)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    response = CreateUserResponse()
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        response.message = USED_EMAIL_MESSAGE
        return response
    user = create_user(db=db, user=user)
    if user:
        response.success = True
        response.data['user'] = user
    else:
        response.message = GENERAL_ERROR_MESSAGE

    return response
