from sqlalchemy import Column, String, Integer, ForeignKey, Text
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
    sender = relationship("User", back_populates='sent_message')
    sender_id = Column(Integer, ForeignKey('users.id'))
    receiver = relationship("User", back_populates='received_message')
    receiver_id = Column(Integer, ForeignKey('users.id'))
