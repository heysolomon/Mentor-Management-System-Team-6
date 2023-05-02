from sqlalchemy.orm import Session

from .models import Conversation
from .schemas import CreateConversation, ViewConversation
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


