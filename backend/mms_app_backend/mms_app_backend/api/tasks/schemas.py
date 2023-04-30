from fastapi_camelcase import CamelModel
from typing import Optional



class BaseTask(CamelModel):
    title :str
    description : str
    mentors : list[int]
    mentor_managers : list[int]
    assigned_to: Optional[str] = None



class CreateTask(BaseTask):
    pass


class UpdateTask(CamelModel):
    title : str | None
    description : str | None
    mentors : list | None
    mentor_managers : list | None


class GetTask(BaseTask):
    id : int

    class Config:
        orm_mode = True
