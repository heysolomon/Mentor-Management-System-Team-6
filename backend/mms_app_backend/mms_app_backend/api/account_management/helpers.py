
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
