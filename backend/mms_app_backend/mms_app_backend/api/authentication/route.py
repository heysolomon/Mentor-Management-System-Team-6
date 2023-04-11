from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .crud import get_user_by_email, create_user
from .schemas import UserCreate, User
from ..utils import get_db
from ...configs.database_config import engine, Base

Base.metadata.create_all(bind=engine)
router = APIRouter()
post = router.post


@post("/user/signup", response_model=User)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_user(db=db, user=user)
