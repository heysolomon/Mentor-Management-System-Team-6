from sqlalchemy import Boolean, Column, Integer, String, DateTime
from sqlalchemy_utils import EmailType
from ..models import AbstractBaseModel



class User(AbstractBaseModel):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(EmailType, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

