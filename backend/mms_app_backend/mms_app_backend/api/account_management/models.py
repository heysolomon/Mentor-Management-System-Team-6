from sqlalchemy import Column, Integer, Text
from sqlalchemy_utils import URLType

from ..models import AbstractBaseModel


class Profile(AbstractBaseModel):
    __tablename__ = 'profiles'
    id = Column(Integer, primary_key=True)
    profile_picture = Column(URLType)
    about = Column(Text)
    website = Column(URLType)
