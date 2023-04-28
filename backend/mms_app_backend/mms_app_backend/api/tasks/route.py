from fastapi import Response, APIRouter, status, Depends
from sqlalchemy.orm import Session

from .constants import CREATED_TASK_SUCCESSFUL_MESSAGE, GET_TASKS_SUCCESSFUL_MESSAGE, UPDATE_TASK_SUCCESSFUL_MESSAGE, \
    TASK_NOT_FOUND_MESSAGE
from .crud import create_task_crud, get_tasks_crud, update_task_crud, delete_task_crud
from .models import Task
from .responses import CreateTaskResponse, GetTasksResponse
from .schemas import CreateTask, UpdateTask
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

# endpoint to update the tasks based on the inputs
@patch('/admin/tasks/{task_id}', response_model=CreateTaskResponse, status_code=status.HTTP_200_OK)
async def update_task(task_id: int, task: UpdateTask, response: Response, jwt_token: str = Depends(get_token()),
                      db: Session = Depends(get_db)):
    task_response = CreateTaskResponse()
    user = verify_access_token(db, jwt_token)
    task_instance = db.query(Task).filter(Task.id == task_id).first()


    if user is None:
        task_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return task_response

    if task_instance is None:
        task_response.message = TASK_NOT_FOUND_MESSAGE
        response.status_code = status.HTTP_404_NOT_FOUND
        return task_response

    updated_task = update_task_crud(db, task, task_id)
    if updated_task:
        task_response.message = UPDATE_TASK_SUCCESSFUL_MESSAGE
        task_response.data.task = updated_task
        task_response.success = True
        return task_response

@delete('/admin/tasks/{task_id}',response_model=status.HTTP_200_OK,)
async def delete_task(task_id:int,response:Response,jwt_token:str=Depends(get_token()),db:Session=Depends(get_db)):
    user = verify_access_token(db, jwt_token)
    task_response = CreateTaskResponse()
    if user is None:
        task_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return

    task_instance = db.query(Task).filter(Task.id == task_id).first()
    if task_instance is None:
        task_response.message = TASK_NOT_FOUND_MESSAGE
        response.status_code = status.HTTP_404_NOT_FOUND
        return task_response

    delete_task = delete_task_crud(db, task_instance)
    if delete_task:
        task_response.message =