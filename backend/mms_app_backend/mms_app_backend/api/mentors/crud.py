from ..account_management.models import Mentor, Role, Profile
from ..authentication.models import User
from ..authentication.helpers import  get_password_hash
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


def create_mentor_user(db, mentor):
    hashed_password = get_password_hash(mentor.password)
    user = User(username=mentor.username, email=mentor.email, hashed_password=hashed_password, first_name=mentor.first_name, last_name=mentor.last_name, about=None)
    db.add(user)
    db.commit()
    db.refresh(user)

    # Create a new role for the mentor and assign it to the user
    mentor_role = Role(name='Mentor', description='Mentor role', mentor=user)
    db.add(mentor_role)
    db.commit()
    db.refresh(user)

    # Create a new profile for the mentor and add it to the database
    mentor_profile = Profile(user_id=user.id, about=mentor.about, mentor=user)
    db.add(mentor_profile)
    db.commit()
    db.refresh(user)

    mentor = Mentor(profile_id=mentor_profile.id, roles=[mentor_role])
    db.add(mentor)
    db.commit()
    db.refresh(mentor)
    return mentor