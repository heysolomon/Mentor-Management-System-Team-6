from sqlalchemy import Column, String, Integer, ForeignKey, Text,Boolean
from sqlalchemy.orm import relationship

from ..models import AbstractBaseModel
from ...configs.database_config import Base


class UserConverstationAssociation(Base):
    __tablename__ = 'participant_conversation_association'
    participant_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    conversation_id = Column(Integer, ForeignKey('conversations.id'), primary_key=True)


class Conversation(AbstractBaseModel):
    __tablename__ = "conversations"
    title = Column(String, unique=True)
    participants = relationship("User", back_populates='conversations',
                                secondary="participant_conversation_association")
    messages = relationship("Message", back_populates='conversation')


class Message(AbstractBaseModel):
    __tablename__ = "messages"
    conversation = relationship("Conversation", back_populates='messages')
    conversation_id = Column(Integer, ForeignKey('conversations.id'))
    content = Column(Text)
    sender_id = Column(Integer)
    receiver_id = Column(Integer, ForeignKey('users.id'))
    is_active = Column(Boolean)