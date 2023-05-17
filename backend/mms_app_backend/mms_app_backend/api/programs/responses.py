from fastapi_camelcase import CamelModel

from .schemas import CreateProgram
from ..utils import ResponseModel


class CreateProgramData(CamelModel):
    program: CreateProgram | None


class CreateProgramResponse(ResponseModel):
    data: CreateProgramData = CreateProgramData()



