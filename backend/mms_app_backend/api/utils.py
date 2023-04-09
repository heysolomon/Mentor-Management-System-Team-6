from .. import database

SessionLocal = database.SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
