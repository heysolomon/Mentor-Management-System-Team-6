from sqlalchemy.orm import Session

from ..account_management.models import MentorManager


def get_mentor_managers_crud(db):
    mentor_managers = db.query(MentorManager).all()
    processed_mentor_managers = []
    for manager in mentor_managers:
        programs = []
        roles = []
        if manager.programs:
            programs = [program.id for program in manager.programs]
        if manager.programs:
            roles = [role.id for role in manager.roles]

        manager.programs = programs
        manager.roles = roles
        processed_mentor_managers.append(manager)

    return processed_mentor_managers


def get_mentor_manager(db: Session, mentor_manager_id: int):
    return db.query(MentorManager).filter(MentorManager.id == mentor_manager_id).first()
