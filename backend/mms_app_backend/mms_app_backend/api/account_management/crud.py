from sqlalchemy.orm import Session

from .helpers import check_is_mentor_manager, check_is_mentor
from .models import Profile, SocialLink, Location
from .schemas import ViewProfile, CreateProfile
from ..authentication.models import User


def create_profile_crud(db: Session, profile: CreateProfile, user: User):
    user_id = user.id

    profile_instance = Profile(about=profile.about, website=profile.website, user_id=user_id)
    db.add(profile_instance)
    db.commit()
    db.refresh(profile_instance)
    profile_instance = db.query(Profile).filter(Profile.user_id == user.id).first()

    location = Location(profile_id=profile_instance.id, city=profile.location.city, state=profile.location.state,
                        country=profile.location.country)

    db.add(location)
    for link in profile.social_links:
        social_link = SocialLink(profile_id=profile_instance.id, name=link.name, url=link.url)

        db.add(social_link)
    is_mentor = check_is_mentor(profile_instance)
    is_mentor_manager = check_is_mentor_manager(profile_instance)
    db.commit()
    db.refresh(profile_instance)
    return ViewProfile(id=profile.id, about=profile.about, website=profile.website, social_links=profile.social_links,
                       location=profile.location, is_mentor=is_mentor, is_mentor_manager=is_mentor_manager,
                       user_id=user_id, username=user.username, firstname=user.first_name, lastname=user.last_name,
                       email=user.email

                       )


def get_profile_crud(db: Session, user: User):
    profile = db.query(Profile).filter(Profile.user_id == user.id).first()
    return ViewProfile(id=profile.id, about=profile.about, website=profile.website, social_links=profile.social_links,
                       location=profile.location, is_mentor=check_is_mentor(profile),
                       is_mentor_manager=check_is_mentor_manager(profile),
                       user_id=user.id, username=user.username, firstname=user.first_name, lastname=user.last_name,
                       email=user.email)
