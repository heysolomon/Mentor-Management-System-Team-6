import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

# Conditional import due to pytest which imports tests as external packages.
if __name__ == "__main__" or __name__ == "main":
    from mms_app_backend.api.authentication.route import router as auth_router
    from mms_app_backend.api.account_management.route import router as account_management_router
    from mms_app_backend.api.tasks.models import Task
    from mms_app_backend.configs.database_config import Base, engine
else:
    from .mms_app_backend.api.authentication.route import router as auth_router
    from .mms_app_backend.api.account_management.route import router as account_management_router
    from .mms_app_backend.configs.database_config import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Add CORS middleware to allow all origins, methods, and headers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(account_management_router)
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
    uvicorn.run(app, host="127.0.0.1", port=8080)
