from fastapi_camelcase import CamelModel


class BaseMentors(CamelModel):
    about: str
    profile_id: int
    programs: list[int] | None
    roles: list[int] | None
    task_id: int


class ViewMentors(BaseMentors):
    id: int

    class Config:
        orm_mode = True


class BaseAboutMentors(CamelModel):
    bio: str
    was_mentor: bool
    availability: bool
    experience_years: int


class ViewAboutMentors(BaseAboutMentors):
    id: int
    previous_programs: list[int]
    programs: int
    documents: list[int]
    roles: list[int]
