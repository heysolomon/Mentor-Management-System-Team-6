from sqlalchemy import Column, Integer, Text,String,ForeignKey
from sqlalchemy_utils import URLType
from sqlalchemy.orm import relationship
from ..models import AbstractBaseModel

# Profile model containing the user's profile data '
class Profile(AbstractBaseModel):
    __tablename__ = 'profiles'
    profile_picture = Column(URLType)
    about = Column(Text)
    website = Column(URLType)
    social_link = relationship("SocialLink",back_populates='profiles')
    location = relationship("Location",back_populates='profiles')

# Social Link model containing the user's social link data e.g github link'
class SocialLink(AbstractBaseModel):
    __tablename__ ='social_links'
    profile_id = Column(Integer, ForeignKey('profiles.id'))
    url = Column(URLType)
    name = Column(String)
    profile = relationship("Profile",back_populates='social_links')

class Location(AbstractBaseModel):
    __tablename__ = 'locations'
    city = Column(String)
    state = Column(String)
    country = Column(String)
    profile = relationship("Profile",back_populates='locations')
    profile_id = Column(Integer,ForeignKey('profiles.id'))