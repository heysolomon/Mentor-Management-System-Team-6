from .models import Profile
def check_is_mentor(profile):
    is_mentor = profile.mentor
    if is_mentor:
        return True
    return False

def check_is_mentor_manager(profile):
    is_mentor_manager = profile.mentor_manager
    if is_mentor_manager:
        return True
    return False

def check_profile_exists(db,user):
    profile = Profile.query.filter_by(user_id=user.id).first()
    if profile :
        return True
    return False
