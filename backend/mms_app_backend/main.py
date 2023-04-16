import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from mms_app_backend.configs.database_config import Base,engine
Base.metadata.create_all(bind=engine)


# Conditional import due to pytest which imports tests as external packages.
if __name__ == "__main__":
    from mms_app_backend.api.authentication.route import router as auth_router
else:
    from .mms_app_backend.api.authentication.route import router as auth_router

app = FastAPI()
app.include_router(auth_router)
get = app.get
post = app.post


@get('/')
async def homepage():
    """
    This is the api's home page.
    It currently redirects to the swagger docs.
    """
    return RedirectResponse('/redoc')


# Server should not run when called by pytest
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
