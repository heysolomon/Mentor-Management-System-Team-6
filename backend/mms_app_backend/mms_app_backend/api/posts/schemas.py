from fastapi_camelcase import CamelModel
from datetime import datetime


class PostBase(CamelModel):
    title: str
    content: str
    created_at: datetime = datetime.utcnow()
    comments: list = []


class CreatePost(PostBase):
    pass


class GetPost(PostBase):
    id: int

    class Config:
        orm_mode = True


class UpdatePost(CamelModel):
    title: str
    content: str
    created_at: datetime = datetime.utcnow()
    comments: list = []

class PostRead(CamelModel):
    title: str
    content: str
    created_at: datetime
    comments: list = []

    class Config:
        orm_mode = True


class CommentBase(CamelModel):
    content: str
    created_at: datetime
    post_id: int

    class Config:
        orm_mode = True


class CreateComment(CommentBase):
    pass


class GetComment(CommentBase):
    id: int

    class Config:
        orm_mode = True
