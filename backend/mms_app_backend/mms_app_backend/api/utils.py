from backend.mms_app_backend.mms_app_backend.configs.database_config import SessionLocal




def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
