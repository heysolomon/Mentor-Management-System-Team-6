from fastapi_camelcase import CamelModel


class BaseConversation(CamelModel):
    title: str


class CreateConversation(BaseConversation):
    participants: list

    class Config:
        orm_mode = True


class CreateMessage(CamelModel):
    content: str
    receiver: int


class GetMessage(CamelModel):
    conversation_id: int


class ViewConversation(CreateConversation):
    id: int
    messages: list[int] | None


class ViewMessage(CamelModel):
    id: int
    content: str
    sender: int
    receiver: int
    conversation_id: int