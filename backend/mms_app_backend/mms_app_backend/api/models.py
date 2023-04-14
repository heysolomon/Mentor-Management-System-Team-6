from ..configs.database_config import Base
from sqlalchemy import Column, Integer
from sqlalchemy.orm import declared_attr
from sqlalchemy_utils import TimezoneType,Timestamp
class AbstractBaseModel(Base):
    __abstract__ = True

    @declared_attr
    def id(cls):
        return Column(Integer, primary_key=True)

    @declared_attr
    def created_at(cls):
        return Column(TimezoneType, default=Timestamp.created,nullable=False)
    @declared_attr
    def updated_at(cls):
        return Column(TimezoneType, default=Timestamp.updated,nullable=False)