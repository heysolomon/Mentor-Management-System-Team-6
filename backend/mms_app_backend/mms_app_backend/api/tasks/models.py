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
