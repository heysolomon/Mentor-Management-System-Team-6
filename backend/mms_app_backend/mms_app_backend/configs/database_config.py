import os

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
#Load Environment variables from .env file to Enviroment
load_dotenv()

# Database admin Username
username = os.environ['DATABASE_USERNAME']
# The name of the database in which the data is stored
database = os.environ['DATABASE_NAME']
# The Url or IP address of  the database
host = os.environ['DATABASE_HOST']
# The database admin password
password = os.environ['DATABASE_PASSWORD']
# The type of database or database Engine
database_type = os.environ['DATABASE_TYPE']

# The database Url containing all the information needed to connect
SQLALCHEMY_DATABASE_URL = f"{database_type}://{username}:{password}@{host}/{database}"

# The database Engine Instance
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
)
#Database Connection Session Instance
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# The Base Model for sqlalchemy models
Base = declarative_base()
