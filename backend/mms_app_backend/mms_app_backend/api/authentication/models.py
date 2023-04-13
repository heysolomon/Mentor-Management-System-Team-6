from sqlalchemy import Boolean, Column, Integer
from sqlalchemy_utils import EmailType,EncryptedType
#
from ...configs.database_config import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(EmailType, unique=True, index=True)
    hashed_password = Column(EncryptedType)
    is_active = Column(Boolean, default=True)
