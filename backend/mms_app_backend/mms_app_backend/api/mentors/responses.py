from fastapi_camelcase import CamelModel

from .schemas import ViewMentors
from ..utils import ResponseModel


class GetMentorsData(CamelModel):
    mentors: list[ViewMentors] | None


class GetMentorsResponse(ResponseModel):
    data: GetMentorsData = GetMentorsData()
