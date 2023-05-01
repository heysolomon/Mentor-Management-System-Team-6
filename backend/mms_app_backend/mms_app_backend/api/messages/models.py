from sqlalchemy import Column, String, Integer, ForeignKey, Text
from sqlalchemy.orm import relationship

from ..models import AbstractBaseModel


class UserConverstationAssociation(AbstractBaseModel):
    __tablename__ = 'participant_conversation_association'
    participant_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    conversation_id = Column(Integer, ForeignKey('conversations.id'), primary_key=True)


class Conversation(AbstractBaseModel):
    __tablename__ = "conversations"
    title = Column(String, unique=True)
    participants = relationship("User", back_populates='conversation', secondary="participant_conversation_association")
    messages = relationship("Message", back_populates='conversation')


class Message(AbstractBaseModel):
    conversation = relationship("Conversation", back_populates='messages')
    conversation_id = Column(Integer, ForeignKey('conversations.id'))
    content = Column(Text)


