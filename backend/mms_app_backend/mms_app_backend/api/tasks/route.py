from fastapi import Response, APIRouter, status, Depends
from sqlalchemy.orm import Session

from .constants import CREATED_TASK_SUCCESSFUL_MESSAGE
from .crud import create_task_crud
from .responses import CreateTaskResponse
from .schemas import CreateTask
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db

router = APIRouter()
get = router.get
post = router.post


@post('/admin/tasks', response_model=CreateTaskResponse, status_code=status.HTTP_201_CREATED)
async def create_task(task: CreateTask, response: Response, jwt_token: str = Depends(get_token()),
                      db: Session = Depends(get_db)):
    task_response = CreateTaskResponse()
    user = verify_access_token(db, jwt_token)

    if user is None:
        task_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return task_response
    created_task = create_task_crud(db, task)
    if created_task:
        task_response.success = True
        task_response.message = CREATED_TASK_SUCCESSFUL_MESSAGE
        return task_response
