from sqlalchemy.orm import Session

from .models import Task
from .schemas import CreateTask, UpdateTask, GetTask
from ..account_management.models import Mentor, MentorManager


def create_task_crud(db: Session, task: CreateTask):
    task_instance = Task(title=task.title, description=task.description)
    db.add(task_instance)
    db.commit()
    db.refresh(task_instance)

    for mentor in task.mentors:
        mentor_instance = db.query(Mentor).filter(Mentor.id == mentor).first()
        mentor_instance.task_id = task_instance.id
        db.add(mentor_instance)
        db.commit()
    for mentor_manager in task.mentor_managers:
        mentor_manager_instance = db.query(MentorManager).filter(MentorManager.id == mentor_manager).first()

        mentor_manager_instance.task_id = task_instance.id
        db.add(mentor_manager_instance)
        db.commit()

    mentors = [mentor.id for mentor in task_instance.mentors]
    managers = [manager.id for manager in task_instance.mentor_managers]
    return GetTask(id=task_instance.id, title=task_instance.title, description=task_instance.description,
                   mentors=mentors,
                   mentor_managers=managers)


def get_tasks_crud(db: Session):
    tasks = db.query(Task).all()
    for task in tasks:
        print(task.id)
    return [GetTask(
        id=task.id,
        title=task.title,
        description=task.description,
        mentors=[mentor.id for mentor in task.mentors],
        mentor_managers=[manager.id for manager in task.mentor_managers])
        for task in tasks]


def update_task_crud(db: Session, task: UpdateTask, task_id):
    task_instance = db.query(Task).filter(Task.id == task_id).first()
    if task.title:
        task_instance.title = task.title

    if task.description:
        task_instance.description = task.description
    # get mentors associated with the task and remove references to the task instance
    mentors = db.query(Mentor).filter(Mentor.task_id == task_instance.id).all()
    if mentors:
        for mentor in mentors:
            mentor.task_id = None
            db.add(mentor)
    # get mentor_managers associated with the task and remove references to the task instance
    mentor_managers = db.query(MentorManager).filter(MentorManager.task_id == task_instance.id).all()
    if mentor_managers:
        for manager in mentor_managers:
            manager.task_id = None
            db.add(manager)

    if task.mentors:
        for mentor in task.mentors:
            mentor_instance = db.query(Mentor).filter(Mentor.id == mentor).first()
            mentor_instance.task_id = task_instance.id
            db.add(mentor_instance)

    if task.mentor_managers:
        for manager in task.mentor_managers:
            manager_instance = db.query(MentorManager).filter(MentorManager.id == manager).first()
            manager_instance.task_id = task_instance.id
            db.add(manager_instance)
    db.add(task_instance)
    db.commit()
    db.refresh(task_instance)

    mentors = [mentor.id for mentor in task_instance.mentors]
    managers = [manager.id for manager in task_instance.mentor_managers]
    return GetTask(id=task_instance.id, title=task_instance.title, description=task_instance.description,
                   mentors=mentors,
                   mentor_managers=managers)


def delete_task_crud(db, task_instance):
    db.delete(task_instance)
    db.commit()
    return True
