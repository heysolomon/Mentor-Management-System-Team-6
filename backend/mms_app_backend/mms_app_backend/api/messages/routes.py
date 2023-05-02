from fastapi import APIRouter, status, Response, Depends
from sqlalchemy.orm import Session
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from .responses import ConversationResponse
from .schemas import CreateConversation
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db

router = APIRouter
get = APIRouter.get
post = APIRouter.post


@post('/users/conversations', status_code=status.HTTP_201_CREATED, response_model=ConversationResponse)
def create_conversation(conversation: CreateConversation, response: Response, jwt_token: str = Depends(get_token),
                        db: Session = Depends(get_db)):
    conversation_response = ConversationResponse()
    user = verify_access_token(db, jwt_token)

    if not user:
        conversation_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return conversation_response

    created_conversation = create_conversation_crud()