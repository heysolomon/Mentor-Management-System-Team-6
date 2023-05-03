from fastapi_camelcase import CamelModel

from .schemas import ViewMentorManager
from ..utils import ResponseModel


class GetMentorManagersData(CamelModel):
    mentor_managers = list[ViewMentorManager] | None


class GetMentorManagersResponse(ResponseModel):
    data = GetMentorManagersData = GetMentorManagersData()
