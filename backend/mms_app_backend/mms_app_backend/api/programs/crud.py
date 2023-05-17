from .schemas import ViewProgram
from ..account_management.models import Criterion
from ..account_management.models import Program, Mentor


def create_program_crud(db, program):
    program_instance = Program(name=program.name, description=program.description)
    criteria = []
    mentor_managers = []
    mentors = []

    db.add(program_instance)
    db.commit()
    db.refresh(program_instance)

    if program.mentors:
        for mentor in program.mentors:
            mentor_instance = db.query(Mentor).get(mentor)

            if mentor_instance:
                program_instance.mentors.append(mentor_instance)
                mentors.append(mentor_instance.id)
            db.add(program_instance)
            db.commit()
            db.refresh(program_instance)
    if program.mentor_managers:
        for manager in program.mentor_managers:
            mentor_manager = db.query().get(manager)

            if mentor_manager:
                program_instance.mentors.append(mentor_manager)
                mentor_managers.append(mentor_manager.id)
            db.add(program_instance)
            db.commit()
            db.refresh(program_instance)
    if program.criteria:
        for criterion in program.criteria:
            db_criterion = db.query(Criterion).get(criterion)

            if db_criterion:
                program_instance.mentors.append(db_criterion)
                criteria.append(db_criterion)
            db.add(program_instance)
            db.commit()
            db.refresh(program_instance)

    return ViewProgram(id=program_instance.id, name=program_instance.description, mentor_managers=mentor_managers,
                       mentors=mentors, criteria=criteria)
