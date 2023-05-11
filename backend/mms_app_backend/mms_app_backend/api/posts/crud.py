from mms_app_backend.api.posts.schemas import CreatePost, CreateComment
from sqlalchemy.orm import Session
from .models import Post,Comment
from .schemas import GetPost, UpdatePost, GetComment, CommentBase


def create_post_crud(db: Session, post: CreatePost):
    post_instance = Post(title=post.title, content=post.content)
    db.add(post_instance)
    db.commit()
    db.refresh(post_instance)
    return GetPost(id=post_instance.id, title=post_instance.title, content=post_instance.content,
                   created_at=post_instance.created_at)

def get_posts_crud(db: Session):
    posts = db.query(Post).all()
    get_posts = []
    for post in posts:
        comments = db.query(Comment).filter(Comment.post_id == post.id).all()
        get_comments = [GetComment(id=c.id, content=c.content, created_at=c.created_at, post_id=c.post_id) for c in comments]
        get_posts.append(GetPost(id=post.id, title=post.title, content=post.content, created_at=post.created_at, comments=get_comments))
    return get_posts

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


def create_comment_crud(db: Session, comment: CreateComment):
    db_comment = Comment(content=comment.content, post_id=comment.post_id)
    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)
    return GetComment(id=db_comment.id, content=db_comment.content, created_at=db_comment.created_at, post_id=db_comment.post_id)


def get_comments_crud(db: Session):
    comments = db.query(Comment).all()
    return [GetComment(id=comment.id, content=comment.content, created_at=comment.created_at, post_id=comment.post_id) for comment in comments]