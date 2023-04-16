from pydantic import BaseModel, HttpUrl


class SocialLink(BaseModel):
    url: HttpUrl
    name: str

    class Config:
        orm_mode = True


class Location(BaseModel):
    city: str
    state: str
    country: str

    class Config:
        orm_mode = True


class BaseProfile(BaseModel):
    about: str
    website: HttpUrl
    social_links: list[SocialLink]
    location: Location

    class Config:
        orm_mode = True


class ViewProfile(BaseProfile):
    username: str
    email: str
    firstname: str
    lastname: str
    is_mentor: bool = False
    is_mentor_manager: bool = False

    class Config:
        orm_mode = True


class CreateProfile(BaseProfile):
    class Config:
        orm_mode = True
