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