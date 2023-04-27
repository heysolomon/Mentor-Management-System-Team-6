from sqlalchemy.orm import relationship

from ..models import AbstractBaseModel
from sqlalchemy import String,Column,Text
class Task(AbstractBaseModel):
    title = Column(String(32))
    description = Column(Text)
    mentor_manager = relationship("MentorManager",back_populates="task")
    mentor = relationship("Mentor",back_populates='task')
