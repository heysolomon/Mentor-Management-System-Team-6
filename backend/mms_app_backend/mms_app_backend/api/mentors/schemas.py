from fastapi_camelcase import CamelModel


# about = Column(Text)
# profile_id = Column(Integer, ForeignKey('profiles.id'))
# profile = relationship("Profile", back_populates='mentor')
# programs = relationship("Program", back_populates='mentors', secondary="program_mentor_association")
# roles = relationship("Role", back_populates='mentor')
# task = relationship("Task", back_populates='mentors')
# task_id = Column(Integer, ForeignKey('tasks.id'))


class BaseMentors(CamelModel):
    about: str
    profile_id: int
    programs: list[int] | None
    roles: list[int] | None
    task_id: int


class ViewMentors(BaseMentors):
    id: int
