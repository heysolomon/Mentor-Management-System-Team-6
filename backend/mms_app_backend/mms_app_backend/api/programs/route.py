from fastapi import FastAPI, Response, status, Depends
from sqlalchemy.orm import Session

from .responses import CreateProgramResponse
from .schemas import CreateProgram
from ..account_management.models import Program
from ..authentication.constants import INVALID_AUTHENTICATION_MESSAGE
from ..authentication.helpers import verify_access_token
from ..utils import get_db, get_token

router = FastAPI()
get = router.get
post = router.post


@post('/users/programs', status_code=status.HTTP_201_CREATED, response_model=CreateProgramResponse)
def create_program(program: CreateProgram, response: Response, db: Session = Depends(get_db),
                   jwt_token: str = Depends(get_token())):
    user = verify_access_token(db, jwt_token)
    program_response = CreateProgramResponse()
    db_program = db.query(Program).filter(Program.name == program.name).first()
    if not user:
        program_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return program_response
    if db_program:
        program_response.message = INVALID_AUTHENTICATION_MESSAGE
        response.status_code = status.HTTP_409_CONFLICT
        return program_response
