from sqlalchemy import Column, Integer, Text, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy_utils import URLType

from ..models import AbstractBaseModel

class Profile(AbstractBaseModel):
    __tablename__ = 'profiles'
    id = Column(Integer, primary_key=True)
    profile_picture = Column(URLType)
    about = Column(Text)
    website = Column(URLType)
    social_links = relationship("SocialLink", back_populates='profile')
    location = relationship("Location", back_populates='profile',uselist=False)
    mentor = relationship("Mentor", back_populates='profile',uselist=False)
    mentor_manager = relationship("MentorManager", back_populates='profile',uselist=False)
    user = relationship("User", back_populates='profile')
    user_id = Column(Integer, ForeignKey("users.id"))

class SocialLink(AbstractBaseModel):
    __tablename__ = 'social_links'
    id = Column(Integer, primary_key=True)
    profile_id = Column(Integer, ForeignKey('profiles.id'))
    url = Column(URLType)
    name = Column(String(255))
    profile = relationship("Profile", back_populates='social_links')


class Location(AbstractBaseModel):
    __tablename__ = 'locations'
    city = Column(String)
    state = Column(String)
    country = Column(String)
    profile_id = Column(Integer, ForeignKey('profiles.id'))
    profile = relationship("Profile", back_populates='location')


class Program(AbstractBaseModel):
    __tablename__ = 'programs'
    name = Column(String)
    avatar = Column(URLType)
    description = Column(Text)
    mentors = relationship("Mentor", back_populates='program')
    criteria = relationship("Criterion", back_populates='program')


class Mentor(AbstractBaseModel):
    __tablename__ = 'mentors'
    about = Column(Text)
    profile_id = Column(Integer, ForeignKey('profiles.id'))
    profile = relationship("Profile", back_populates='mentors')
    program = relationship("Program", back_populates='mentors')
    program_id = Column(Integer, ForeignKey('programs.id'))

class MentorManager(AbstractBaseModel):
    __tablename__ ='mentor_managers'
    profile_id = Column(Integer, ForeignKey('profiles.id'))
    profile = relationship("Profile", back_populates='mentor_manager')