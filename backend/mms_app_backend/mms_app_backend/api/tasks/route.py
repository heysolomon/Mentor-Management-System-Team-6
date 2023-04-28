from fastapi import Response, APIRouter, status, Depends
from sqlalchemy.orm import Session

from .constants import CREATED_TASK_SUCCESSFUL_MESSAGE, GET_TASKS_SUCCESSFUL_MESSAGE
from .crud import create_task_crud, get_tasks_crud
from .responses import CreateTaskResponse, GetTasksResponse
from .schemas import CreateTask
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_token, get_db

router = APIRouter()
get = router.get
post = router.post
patch = router.patch
delete = router.delete


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
        task_response.data.task = created_task
        task_response.message = CREATED_TASK_SUCCESSFUL_MESSAGE
        return task_response


@get('/admin/tasks', status_code=status.HTTP_200_OK, response_model=GetTasksResponse)
async def get_tasks(response: Response, jwt_token: str = Depends(get_token()), db: Session = Depends(get_db)):
    tasks_response = GetTasksResponse()
    user = verify_access_token(db, jwt_token)
    if user is None:
        tasks_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return tasks_response
    tasks = get_tasks_crud(db)
    tasks_response.success = True
    tasks_response.data.tasks = tasks
    tasks_response.message = GET_TASKS_SUCCESSFUL_MESSAGE
    return tasks_response
