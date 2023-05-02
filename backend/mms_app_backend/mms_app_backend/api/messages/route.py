from fastapi import APIRouter, status, Response, Depends
from sqlalchemy.orm import Session

from .crud import create_conversation_crud
from .responses import ConversationResponse
from .schemas import CreateConversation
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db
from .constants import CONVERSATION_CREATED_SUCCESS_MESSAGE
router = APIRouter
get = APIRouter.get
post = APIRouter.post
websocket = APIRouter.websocket


@post('/users/conversations', status_code=status.HTTP_201_CREATED, response_model=ConversationResponse)
def create_conversation(conversation: CreateConversation, response: Response, jwt_token: str = Depends(get_token),
                        db: Session = Depends(get_db)):
    conversation_response = ConversationResponse()
    user = verify_access_token(db, jwt_token)

    if not user:
        conversation_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return conversation_response

    created_conversation = create_conversation_crud(db, conversation)

    if created_conversation:
        conversation_response.message = CONVERSATION_CREATED_SUCCESS_MESSAGE
        conversation_response.data.conversation = created_conversation
        conversation_response.success = True
        return conversation_response



