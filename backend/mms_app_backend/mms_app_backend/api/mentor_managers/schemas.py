from fastapi_camelcase import CamelModel



class BaseMentorManager(CamelModel):
    profile_id: int
    about: str
    roles: list[int]
    programs: list[int]
    task_id: int


class ViewMentorManager(BaseMentorManager):
    id: int

    class Config:
        orm_mode = True
