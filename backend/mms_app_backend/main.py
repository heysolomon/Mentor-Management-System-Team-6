import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from api.authentication.route import router as auth_router


from database import engine

app = FastAPI()
app.include_router(auth_router)
get = app.get
post = app.post


@get('/')
def homepage():
    """
    This is the api's home page.
    :return:

    """
    return RedirectResponse('/redoc')


uvicorn.run(app, port=8000, host="127.0.0.1")
