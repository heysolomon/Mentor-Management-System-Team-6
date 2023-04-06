from fastapi import FastAPI

app = FastAPI()

get = app.get


@get('/')
def home():
    return {"greeting": "Welcome Home"}
