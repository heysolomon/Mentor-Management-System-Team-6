from fastapi_camelcase import CamelModel

from .schemas import ViewProgram
from ..utils import ResponseModel


class CreateProgramData(CamelModel):
    program: ViewProgram | None


class CreateProgramResponse(ResponseModel):
    data: CreateProgramData = CreateProgramData()
