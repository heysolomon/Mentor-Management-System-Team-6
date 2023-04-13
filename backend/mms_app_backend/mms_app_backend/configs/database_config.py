import os

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

username = os.environ['DATABASE_USERNAME']
database = os.environ['DATABASE_NAME']
host = os.environ['DATABASE_HOST']
password = os.environ['DATABASE_PASSWORD']
database_type = os.environ['DATABASE_TYPE']

SQLALCHEMY_DATABASE_URL = f"{database_type}://{username}:{password}@{host}/{database}"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
