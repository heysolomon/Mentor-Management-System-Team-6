from fastapi_camelcase import CamelModel

from .schemas import ViewConversation, ViewMessage
from ..utils import ResponseModel


class ConversationData(CamelModel):
    conversation: ViewConversation | None


class MessagesData(CamelModel):
    messages: list[ViewMessage] | None


class ConversationResponse(ResponseModel):
    data: ConversationData = ConversationData()


class MessageResponse(ResponseModel):
    data: MessagesData = MessagesData()
