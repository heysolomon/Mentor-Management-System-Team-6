from pydantic import BaseModel,HttpUrl


class SocialLink(BaseModel):
    id: int
    url: HttpUrl
    name: str


class Location(BaseModel):
    id: int
    city: str
    state: str
    country: str


class BaseProfile(BaseModel):
    id: int
    about: str
    website: str
    social_links: list[SocialLink]
    location: Location
    is_mentor: bool
    is_mentor_manager: bool


class ViewProfile(BaseProfile):
    username: str
    email: str
    firstname: str
    lastname: str


class CreateProfile(BaseProfile):

    pass
