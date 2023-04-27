from .schemas import GetTask
from ..utils import ResponseModel
from fastapi_camelcase import CamelModel
class CreateTaskData(CamelModel):
    task : GetTask | None

class CreateTaskResponse(ResponseModel):
    data: CreateTaskData = CreateTaskData()


