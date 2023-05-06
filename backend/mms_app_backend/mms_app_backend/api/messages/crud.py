from sqlalchemy.orm import Session

from .models import Conversation, Message
from .schemas import CreateConversation, ViewConversation, CreateMessage, ViewMessage, EditMessage
from ..authentication.models import User


def create_conversation_crud(db: Session, conversation: CreateConversation):
    created_conversation = Conversation(title=conversation.title)
    db.add(created_conversation)
    db.commit()
    db.refresh(created_conversation)
    for participant in conversation.participants:
        user = db.query(User).filter(User.id == participant).first()
        user.conversations.append(created_conversation)
        db.add(user)
        db.commit()
        db.refresh(user)
    participants = [participant.id for participant in created_conversation.participants]
    return ViewConversation(id=created_conversation.id, title=created_conversation.title,
                            participants=participants, messages=created_conversation.messages)


def create_message_crud(db: Session, message_details: CreateMessage, sender_id: int):
    conversation = db.query(Conversation).filter(Conversation.participants.contains(sender_id)).filter(
        Conversation.participants.contains(message_details.receiver)).first()
    conversation_id = None
    if conversation:
        conversation_id = conversation.id

    created_message = Message(content=message_details.content, sender_id=sender_id,
                              receiver_id=message_details.receiver, conversation_id=conversation_id)
    db.add(created_message)
    db.commit()
    db.refresh(created_message)
    return ViewMessage(id=created_message.id, content=created_message.content, sender=created_message.sender_id,
                       receiver=created_message.receiver_id)


def get_messages_crud(db, conversation_id):
    return db.query(Message).filter(Message.conversation_id == conversation_id).all()


def edit_message_crud(db: Session, message_id: int, edit_message: EditMessage):
    message = db.query(Message).filter(Message.id == message_id).first()
    if message:
        message.content = edit_message.content
    db.add(message)
    db.commit()
    db.refresh(message)
    return message


def deactivate_message_crud(db: Session, message_id: int):
    message = db.query(Message).filter(Message.id == message_id).first()
    message.is_active = False
    db.add(message)
    db.commit()
    db.refresh(message)
    return message
