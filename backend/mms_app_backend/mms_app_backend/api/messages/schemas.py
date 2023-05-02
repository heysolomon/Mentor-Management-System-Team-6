from fastapi_camelcase import CamelModel


class BaseConversation(CamelModel):
    title: str


class CreateConversation(BaseConversation):
    participants: list

    class Config:
        orm_mode = True


class ViewConversation(CreateConversation):
    id: int
    messages: list | None
