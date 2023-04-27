from fastapi import Response,APIRouter,status,Depends

from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..utils import get_token,get_db
from .responses import CreateTaskResponse
from .schemas import CreateTask
from ..authentication.helpers import verify_access_token
router = APIRouter()
get = router.get
post = router.post
@post('/admin/tasks',response_model=CreateTaskResponse,status_code=status.HTTP_201_CREATED)
async def create_task(task:CreateTask,response:Response,jwt_token:Depends(get_token()),db:Depends(get_db)):
    task_response = CreateTaskResponse()
    user = verify_access_token(jwt_token)

    if user is None:
        task_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED


