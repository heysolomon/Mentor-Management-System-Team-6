from ..account_management.models import Mentor
from sqlalchemy.orm import Session



def get_mentors_crud(db):
    mentors = db.query(Mentor).all()
    processed_mentors = []
    if mentors:
        for mentor in mentors:
            if mentor.programs:
                programs = [program.id for program in mentor.programs]
                mentor.programs = programs
            if mentor.roles:
                roles = [role.id for role in mentor.roles]
                mentor.roles = roles
            processed_mentors.append(mentor)

    return processed_mentors

