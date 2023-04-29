from fastapi_camelcase import CamelModel

from .schemas import GetTask
from ..utils import ResponseModel


class CreateTaskData(CamelModel):
    task: GetTask | None


class CreateTaskResponse(ResponseModel):
    data: CreateTaskData = CreateTaskData()


class GetTasksData(CamelModel):
    tasks: list[GetTask] | None


class GetTasksResponse(ResponseModel):
    data: GetTasksData = GetTasksData()
