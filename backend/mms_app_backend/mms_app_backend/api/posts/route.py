from fastapi import Response, APIRouter, status, Depends
from mms_app_backend.api.authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from mms_app_backend.api.authentication.helpers import verify_access_token
from mms_app_backend.api.utils import get_token, get_db
from sqlalchemy.orm import Session

from .constants import CREATED_POST_SUCCESSFUL_MESSAGE, GET_POST_SUCCESSFUL_MESSAGE, POST_NOT_FOUND_MESSAGE, \
    UPDATE_POST_SUCCESSFUL_MESSAGE, POSTS_NOT_FOUND_MESSAGE, POST_DELETED_SUCCESSFUL_MESSAGE, \
    CREATED_COMMENT_SUCCESSFUL_MESSAGE, GET_COMMENTS_SUCCESSFUL_MESSAGE
from .crud import create_post_crud, get_posts_crud, update_post_crud, delete_post_crud, create_comment_crud, \
    get_comments_crud
from .models import Post
from .responses import CreatePostResponse, GetPostResponse, CreateCommentResponse, GetCommentsResponse
from .schemas import CreatePost, UpdatePost, CreateComment

router = APIRouter()
get = router.get
post = router.post
patch = router.patch
delete = router.delete
put = router.put


@post('/admin/posts', response_model=CreatePostResponse, status_code=status.HTTP_201_CREATED)
async def create_post(posts: CreatePost, response: Response, jwt_token: str = Depends(get_token()),
                      db: Session = Depends(get_db)):
    post_response = CreatePostResponse()
    user = verify_access_token(db, jwt_token)

    if user is None:
        post_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return post_response

    created_task = create_post_crud(db, posts)
    if created_task:
        post_response.success = True
        post_response.data.post = created_task
        post_response.message = CREATED_POST_SUCCESSFUL_MESSAGE
        return post_response


@get('/admin/posts', status_code=status.HTTP_200_OK, response_model=GetPostResponse)
async def get_posts(response: Response, jwt_token: str = Depends(get_token()), db: Session = Depends(get_db)):
    posts_response = GetPostResponse()
    user = verify_access_token(db, jwt_token)
    if user is None:
        posts_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return posts_response
    posts = get_posts_crud(db)
    posts_response.success = True
    posts_response.data.posts = posts
    posts_response.message = GET_POST_SUCCESSFUL_MESSAGE
    return posts_response


@patch('/admin/post/{post_id}', response_model=CreatePostResponse, status_code=status.HTTP_200_OK)
async def update_post(post_id: int, posts: UpdatePost, response: Response, jwt_token: str = Depends(get_token()),
                      db: Session = Depends(get_db)):
    post_response = CreatePostResponse()
    user = verify_access_token(db, jwt_token)
    post_instance = db.query(Post).filter(Post.id == post_id).first()

    if user is None:
        post_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return post_response

    if post_instance is None:
        post_response.message = POST_NOT_FOUND_MESSAGE
        response.status_code = status.HTTP_404_NOT_FOUND
        return post_response

    updated_post = update_post_crud(db, posts, post_id)
    if updated_post:
        post_response.message = UPDATE_POST_SUCCESSFUL_MESSAGE
        post_response.data.post = updated_post
        post_response.success = True
        return post_response


@delete('/admin/post/{post_id}', response_model=CreatePostResponse, status_code=status.HTTP_200_OK)
async def delete_post(post_id: int, response: Response, jwt_token: str = Depends(get_token()),
                      db: Session = Depends(get_db)):
    """
    Endpoint to permanently delete posts from the database.
    """
    user = verify_access_token(db, jwt_token)
    post_response = CreatePostResponse()
    if user is None:
        post_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return

    task_instance = db.query(Post).filter(Post.id == post_id).first()
    if task_instance is None:
        post_response.message = POSTS_NOT_FOUND_MESSAGE
        response.status_code = status.HTTP_404_NOT_FOUND
        return post_response
    deleted_task = delete_post_crud(db, task_instance)
    if deleted_task:
        post_response.message = POST_DELETED_SUCCESSFUL_MESSAGE
        post_response.success = True
        return post_response


@post('/post/comment', response_model=CreateCommentResponse, status_code=status.HTTP_201_CREATED)
async def create_comment(comment: CreateComment, response: Response, jwt_token: str = Depends(get_token()),
                         db: Session = Depends(get_db)):
    comment_response = CreateCommentResponse()
    user = verify_access_token(db, jwt_token)

    if user is None:
        comment_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return comment_response

    created_comment = create_comment_crud(db, comment)
    if created_comment:
        comment_response.success = True
        comment_response.data.comment = created_comment
        comment_response.message = CREATED_COMMENT_SUCCESSFUL_MESSAGE
        return comment_response


@get('/post/comments', status_code=status.HTTP_200_OK, response_model=GetCommentsResponse)
async def get_comments(response: Response, jwt_token: str = Depends(get_token()), db: Session = Depends(get_db)):
    comments_response = GetCommentsResponse()
    user = verify_access_token(db, jwt_token)
    if user is None:
        comments_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return comments_response
    comments = get_comments_crud(db)
    comments_response.success = True
    comments_response.data.comments = comments
    comments_response.message = GET_COMMENTS_SUCCESSFUL_MESSAGE
    return comments_response
