from passlib.context import CryptContext

PASSWORD_CONTEXT = CryptContext(schemes=['bcrypt'])
USED_EMAIL_MESSAGE = "An account with that email has already been created"
ACCOUNT_CREATED_MESSAGE = "User Account has been created successfully "
