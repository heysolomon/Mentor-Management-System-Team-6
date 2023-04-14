from sqlalchemy import Column, Integer, Text, String, ForeignKey, column
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
    program = relationship("Program",back_populates='profiles')
    mentor = relationship("mentor",back_populates='profiles')
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

class Program(AbstractBaseModel):
    __tablename__ = 'programs'
    name = Column(String)
    avatar = Column(URLType)
    description = Column(Text)
    mentor_manager = relationship("mentor_manager",back_populates='program')
    mentee = relationship("Profile",back_populates='program')
    mentor = relationship("Mentor",back_populates='programs')
    mentor_manager_id = Column(Integer,ForeignKey('profile'))
    criteria = Column()

class Mentor(AbstractBaseModel):
    __tablename__ ='mentors'
    about  = Column(Text)
    profile = relationship("Profile",back_populates='mentors')
    profile_id = Column(Integer,ForeignKey('profiles.id'))
    program = relationship("Program",back_populates='mentors')
    program_id = Column(Integer,ForeignKey('programs.id'))
    bio = Column(Text)
    expertise = Column(String)
    # roles yet to be defined
    roles = Column(String)

class MentorManager(AbstractBaseModel):
    profile = relationship("Profile", back_populates='mentors')
    profile_id = Column(Integer, ForeignKey('profiles.id'))
    program = relationship("Program", back_populates='mentors')
    program_id = Column(Integer, ForeignKey('programs.id'))
    # roles yet to be defined
    roles = Column(String)

class Criterion(AbstractBaseModel):
    __tablename__ = 'criteria'
    title = Column(String)
    program = relationship("Program", back_populates='criteria')
    program_id = Column(Integer, ForeignKey('programs.id'))
    description = Column(Text)


