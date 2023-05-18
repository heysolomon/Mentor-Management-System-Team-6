from fastapi_camelcase import CamelModel

from .schemas import ViewMentors, CreateMentor
from ..utils import ResponseModel


class GetMentorsData(CamelModel):
    mentors: list[ViewMentors] | None


class GetMentorsResponse(ResponseModel):
    data: GetMentorsData = GetMentorsData()


class CreateMentorData(CamelModel):
    mentor: CreateMentor | None


class CreateMentorResponse(ResponseModel):
    data: CreateMentorData = CreateMentorData()
