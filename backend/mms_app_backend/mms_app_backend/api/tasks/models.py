from sqlalchemy import String, Column, Text, Boolean, Integer, ForeignKey
from sqlalchemy.orm import relationship

from ..models import AbstractBaseModel


class Task(AbstractBaseModel):
    __tablename__ = 'tasks'
    title = Column(String(32))
    description = Column(Text)
    mentor_managers = relationship("MentorManager", back_populates="task")
    mentors = relationship("Mentor", back_populates='task')
    completed = Column(Boolean, default=False)
    open = Column(Boolean, default=True)
    assigned_to_id = Column(Integer, ForeignKey('users.id')) #Add a foreign key that will refer to the ID column in the User table
    assigned_to = relationship('User',back_populates='tasks') # Create a bidirectional relationship between the two tables
