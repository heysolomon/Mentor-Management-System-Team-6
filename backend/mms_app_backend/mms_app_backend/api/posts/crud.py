from mms_app_backend.api.posts.schemas import CreatePost
from sqlalchemy.orm import Session
from .models import Post
from .schemas import GetPost, UpdatePost


def create_post_crud(db: Session, post: CreatePost):
    post_instance = Post(title=post.title, content=post.content)
    db.add(post_instance)
    db.commit()
    db.refresh(post_instance)
    return GetPost(id=post_instance.id, title=post_instance.title, content=post_instance.content,
                   created_at=post_instance.created_at)


def get_posts_crud(db: Session):
    posts = db.query(Post).all()
    return [GetPost(id=post.id, title=post.title, content=post.content, created_at=post.created_at) for post in posts]


def update_post_crud(db: Session, posts: UpdatePost, post_id):
    post_instance = db.query(Post).filter(Post.id == post_id).first()

    print("The post instance", post_instance)
    if posts.title:
        post_instance.title = posts.title
    if posts.content:
        post_instance.content = posts.content

    db.add(post_instance)
    db.commit()
    db.refresh(post_instance)
    return GetPost(id=post_instance.id, title=post_instance.title, content=post_instance.content,
                   created_at=post_instance.created_at)


def delete_post_crud(db, post_instance):
    db.delete(post_instance)
    db.commit()
    return True
