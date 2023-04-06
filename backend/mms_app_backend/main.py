from fastapi import FastAPI

app = FastAPI()

get = app.get


@get('/')
def home():
    """
    This is the api's home page.
    :return:
    """
    return {"greeting": "Welcome Home"}

