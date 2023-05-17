from datetime import datetime

from mms_app_backend.api.models import AbstractBaseModel
from sqlalchemy import Integer, Column, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship


class Post(AbstractBaseModel):
    __tablename__ = 'posts'

    title = Column(String)
    content = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    comments = relationship("Comment", back_populates="posts")


class Comment(AbstractBaseModel):
    __tablename__ = 'comments'
    content = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    post_id = Column(Integer, ForeignKey('posts.id'))
    posts = relationship('Post', back_populates='comments')
