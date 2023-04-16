from .models import Profile


def create_profile(db, profile, user_id):
    profile = Profile(**profile, user_id=user_id)
    db.session.add(profile)
    db.session.commit()
    db.refresh(profile)
    return profile
