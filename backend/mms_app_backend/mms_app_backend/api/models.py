from sqlalchemy import Column, Integer
from sqlalchemy.orm import declared_attr
from sqlalchemy_utils import Timestamp

from ..configs.database_config import Base


class AbstractBaseModel(Base, Timestamp):
    __abstract__ = True

    @declared_attr
    def id(cls):
        return Column(Integer, primary_key=True, index=True)
