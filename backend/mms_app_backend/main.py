
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from mms_app_backend.api.authentication.route import router as auth_router

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
