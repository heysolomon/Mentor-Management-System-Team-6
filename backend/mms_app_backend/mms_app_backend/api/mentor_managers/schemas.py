from fastapi_camelcase import CamelModel


# profile_id = Column(Integer, ForeignKey('profiles.id'))
#     profile = relationship("Profile", back_populates='mentor_manager')
#     about = Column(Text)
#     roles = relationship("Role", back_populates='mentor_manager')
#     programs = relationship("Program", back_populates='mentor_manager')
#     task = relationship("Task", back_populates='mentor_managers')
#     task_id = Column(Integer, ForeignKey('tasks.id'))
class BaseMentorManager(CamelModel):
    profile_id: int
    about: str
    roles: list[int]
    programs: list[int]
    task_id: int


class ViewMentorManager(BaseMentorManager):
    id: int
