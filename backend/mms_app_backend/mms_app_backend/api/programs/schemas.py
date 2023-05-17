from fastapi_camelcase import CamelModel


class BaseProgram(CamelModel):
    name: str
    description: str
    mentor_managers: list[int] | None
    mentors: list[int] | None
    criteria: list[int] | None


class CreateProgram(BaseProgram):
    pass

