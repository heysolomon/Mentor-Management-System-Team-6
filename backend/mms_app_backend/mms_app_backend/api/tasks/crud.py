from .schemas import CreateTask
from sqlalchemy.orm import Session
from .models import Task
from ..account_management.models import Mentor,MentorManager
def create_task_crud(db:Session,task:CreateTask):
    task_instance = Task(title=task.title, description=task.description)
    for mentor in task.mentors:
        mentor_instance = db.query(Mentor).filter(MentorManager.id == mentor).first()
        mentor_instance.task_id = task_instance.id
        db.add(mentor_instance)
    for mentor_manager in task.mentor_managers:
        mentor_manager_instance = db.query(MentorManager).filter(MentorManager.id == mentor_manager).first()
        mentor_manager_instance.task_id = task_instance.id
        db.add(mentor_manager_instance)

    db.add(task_instance)
    db.commit()
    db.refresh(task_instance)
    return task_instance

