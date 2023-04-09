from backend.mms_app_backend.mms_app_backend import database

SessionLocal = database.SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
