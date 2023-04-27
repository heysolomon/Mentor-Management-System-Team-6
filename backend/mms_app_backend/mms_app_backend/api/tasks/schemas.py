from fastapi_camelcase import CamelModel


class BaseTask(CamelModel):
    title = str
    description = str
    mentors = list
    mentor_managers = list

class CreateTask(BaseTask):
    pass

class UpdateTask(CamelModel):
    title = str | None
    description = str | None
    mentors = list | None
    mentor_managers = list | None

class DeleteTask(CamelModel):
    id = int

class GetTask(BaseTask):
    id = int
