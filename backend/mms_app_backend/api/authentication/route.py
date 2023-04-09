from fastapi import APIRouter, Depends, HTTPException

from backend.mms_app_backend.api.authentication.schemas import UserCreate
from backend.mms_app_backend.api.authentication.crud import get_user_by_email, create_user
from sqlalchemy.orm import Session
from backend.mms_app_backend.api.authentication.models import  Base
from backend.mms_app_backend.database import engine
from backend.mms_app_backend.api.utils import get_db
from backend.mms_app_backend.api.authentication.schemas import User

engine = engine
Base.metadata.create_all(bind=engine)
router = APIRouter()
post = router.post


@post("/signup", response_model=User)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_user(db=db, user=user)

