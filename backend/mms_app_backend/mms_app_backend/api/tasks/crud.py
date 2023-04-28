from sqlalchemy.orm import Session

from .models import Task
from .schemas import CreateTask, UpdateTask
from ..account_management.models import Mentor, MentorManager


def create_task_crud(db: Session, task: CreateTask):
    task_instance = Task(title=task.title, description=task.description)
    for mentor in task.mentors:
        mentor_instance = db.query(Mentor).filter(MentorManager.id == mentor).first()
        print('mentor_instance', mentor_instance)
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


def get_tasks_crud(db: Session):
    return db.query(Task).all()


def update_task_crud(db: Session, task: UpdateTask, task_id):
    task_instance = db.query(Task).filter(Task.id == task_id).first()
    if task.title:
        task_instance.title = task.title
    if task.description:
        task_instance.description = task.description
    mentors = db.query(Mentor).filter(Mentor.task_id == task_instance.id)
    for mentor in mentors:
        mentor.task_id = None
        db.add(mentor)
    mentor_managers = db.query(MentorManager).filter(MentorManager.task_id == task_instance.id)
    for manager in mentor_managers:
        manager.task_id = None
        db.add(manager)

    for mentor in task.mentors:
        mentor_instance = db.query(mentor).filter(Mentor.id == mentor).first()
        mentor_instance.task_id = task_instance.id
        db.add(mentor_instance)

    for manager in task.mentor_managers:
        manager_instance = db.query(manager).filter(MentorManager.id == manager).first()
        manager_instance.task_id = task_instance.id
        db.add(manager_instance)
    db.add(task_instance)
    db.commit()

    return task_instance
