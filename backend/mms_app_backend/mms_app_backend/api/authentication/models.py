from sqlalchemy import Boolean, Column, Integer, String

#
from backend.mms_app_backend.mms_app_backend.configs.database_config import Base




class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
