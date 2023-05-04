from fastapi_camelcase import CamelModel

from .schemas import ViewConversation
from ..utils import ResponseModel


class ConversationData(CamelModel):
    conversation : ViewConversation | None


class ConversationResponse(ResponseModel):
    data: ConversationData = ConversationData()
