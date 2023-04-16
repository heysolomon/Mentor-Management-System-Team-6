from .models import Profile, SocialLink, Location
from .schemas import ViewProfile
from .helpers import check_is_mentor_manager,check_is_mentor

def create_profile_crud(db, profile, user):
    user_id = user.id
    profile_instance = Profile(about=profile.about, website=profile.website, user_id=user_id)
    location = Location(profile_id=profile_instance.id, city=profile.location.city, state=profile.location.state,
        country=profile.location.country)
    db.add(profile_instance)
    db.add(location)
    for link in profile.social_links:
        social_link = SocialLink(profile_id=profile_instance.id, name=link.name, url=link.url)

        db.add(social_link)
    is_mentor = check_is_mentor(profile_instance)
    is_mentor_manager = check_is_mentor_manager(profile_instance)
    db.commit()
    db.refresh(profile_instance)
    return ViewProfile(about=profile.about, website=profile.website, social_links=profile.social_links,
        location=profile.location, is_mentor=is_mentor, is_mentor_manager=is_mentor_manager,
        user_id=user_id, username=user.username, firstname=user.first_name, lastname=user.last_name, email=user.email

    )

def get_profile(db):
