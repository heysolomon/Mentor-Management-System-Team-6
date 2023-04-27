from fastapi_camelcase import CamelModel

from .schemas import GetTask
from ..utils import ResponseModel


class CreateTaskData(CamelModel):
    task: GetTask | None


class CreateTaskResponse(ResponseModel):
    data: CreateTaskData = CreateTaskData()
