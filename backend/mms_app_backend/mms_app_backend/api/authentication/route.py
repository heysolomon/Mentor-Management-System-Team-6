from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .crud import get_user_by_email, create_user
from .responses import CreateUserResponse
from .schemas import UserCreate
from ..utils import get_db
from ...configs.database_config import engine, Base

Base.metadata.create_all(bind=engine)
router = APIRouter()
post = router.post


@post("/user/signup", response_model=CreateUserResponse)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    response = CreateUserResponse()
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        response.error_message = "An account with that email has already been created"
        return response
    user = create_user(db=db, user=user)
    if user:
        print(response)
        response.success = True
        response.data['user'] = user
    else:
        response.error_message = "There has been an Unexpected Error. If the error persists please contact MMS support."

    return response
