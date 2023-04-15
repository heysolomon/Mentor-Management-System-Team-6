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
    locations = relationship("Location", back_populates='profile')
    programs = relationship("Program", back_populates='mentee')
    mentors = relationship("Mentor", back_populates='profile')
    mentor_managers = relationship("MentorManager", back_populates='profile')


class SocialLink(AbstractBaseModel):
    __tablename__ = 'social_links'
    id = Column(Integer, primary_key=True)
    profile_id = Column(Integer, ForeignKey('profiles.id'))
    url = Column(URLType)
    name = Column(String(255))
    profile = relationship("Profile", back_populates='social_links')


class Location(AbstractBaseModel):
    __tablename__ = 'locations'
    id = Column(Integer, primary_key=True)
    city = Column(String)
    state = Column(String)
    country = Column(String)
    profile_id = Column(Integer, ForeignKey('profiles.id'))
    profile = relationship("Profile", back_populates='locations')


class Program(AbstractBaseModel):
    __tablename__ = 'programs'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    avatar = Column(URLType)
    description = Column(Text)
    mentor_manager_id = Column(Integer, ForeignKey('profiles.id'))
    mentor_manager = relationship("MentorManager", back_populates='program')
    mentee_id = Column(Integer, ForeignKey('profiles.id'))
    mentee = relationship("Profile", back_populates='programs')
    mentors = relationship("Mentor", back_populates='program')
    criteria = relationship("Criterion", back_populates='program')


class Mentor(AbstractBaseModel):
    __tablename__ = 'mentors'
    id = Column(Integer, primary_key=True)
    about = Column(Text)
    profile_id = Column(Integer, ForeignKey('profiles.id'))
    profile = relationship("Profile", back_populates='mentors')


Base.met