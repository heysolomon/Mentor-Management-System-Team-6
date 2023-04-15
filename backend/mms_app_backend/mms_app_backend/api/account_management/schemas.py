from pydantic import BaseModel


class SocialLink(BaseModel):
    id: int
    url: str
    name: str


class Location(BaseModel):
    id: int
    city: str
    state: str
    country: str

class BaseProfile(BaseModel):
    id: int
    firstname: str
    lastname: str
    email: str
    about: str
    website: str
    social_links: list[SocialLink]
    location: Location
    is_mentor: bool
    is_mentor: bool



