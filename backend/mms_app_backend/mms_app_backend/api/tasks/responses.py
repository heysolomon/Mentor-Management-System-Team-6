from .schemas import CreateTask
from ..utils import ResponseModel
class CreateTaskResponse(ResponseModel):
    data:CreateTask