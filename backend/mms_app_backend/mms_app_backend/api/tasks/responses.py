from fastapi_camelcase import CamelModel
from .schemas import GetTask
from ..utils import ResponseModel
from typing import List


class CreateTaskData(CamelModel):
    task: GetTask | None


class CreateTaskResponse(ResponseModel):
    data: CreateTaskData = CreateTaskData()


class GetTasksData(CamelModel):
    tasks: List[GetTask] | None


class GetTasksResponse(ResponseModel):
    data: GetTasksData = GetTasksData()

