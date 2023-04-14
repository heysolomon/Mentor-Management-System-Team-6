from sqlalchemy import Column,Integer
from sqlalchemy_utils import URLType
from ...configs.database_config import Base


class Profile(Base):
    __tablename__ = 'profiles'
    id = Column(Integer, primary_key=True)
    image = Column(URLType)
    about = Column(
    )

