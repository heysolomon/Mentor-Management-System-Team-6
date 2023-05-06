from fastapi_camelcase import CamelModel

from .schemas import ViewConversation, ViewMessage
from ..utils import ResponseModel


class ConversationData(CamelModel):
    conversation: ViewConversation | None


class ConversationsData(CamelModel):
    conversations: list[ViewConversation] | None


class MessagesData(CamelModel):
    messages: list[ViewMessage] | None


class MessageData(CamelModel):
    message: ViewMessage | None


class ConversationResponse(ResponseModel):
    data: ConversationData = ConversationData()


class ConversationsResponse(ResponseModel):
    data: ConversationsData = ConversationsData()


class MessagesResponse(ResponseModel):
    data: MessagesData = MessagesData()


class MessageResponse(ResponseModel):
    data: MessageData = MessageData()
