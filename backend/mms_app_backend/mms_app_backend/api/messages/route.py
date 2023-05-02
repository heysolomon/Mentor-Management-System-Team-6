from fastapi import APIRouter, status, Response, Depends, WebSocket
from sqlalchemy.orm import Session

from .constants import CONVERSATION_CREATED_SUCCESS_MESSAGE
from .crud import create_conversation_crud, create_message_crud
from .responses import ConversationResponse
from .schemas import CreateConversation, CreateMessage
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db, get_token_ws

router = APIRouter()
get = router.get
post = router.post
delete = router.delete
websocket = router.websocket


@post('/users/conversations', status_code=status.HTTP_201_CREATED, response_model=ConversationResponse)
async def create_conversation(conversation: CreateConversation, response: Response,
                              jwt_token: str = Depends(get_token()),
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


connections = {

}


@websocket('/users/messages/ws')
async def message_subscription(connection: WebSocket, jwt_token: str = Depends(get_token_ws),
                               db: Session = Depends(get_db)):
    await connection.accept()
    user = verify_access_token(db, jwt_token)
    connections[f"{user.id}"] = connection
    while True:
        sender_message: CreateMessage = CreateMessage(**(await connection.receive_json()))
        created_message = create_message_crud(db, sender_message, user.id)
        response_connection = connections.get(f'{sender_message.receiver}')
        if response_connection:
            await response_connection.send_json(data=created_message.dict())
