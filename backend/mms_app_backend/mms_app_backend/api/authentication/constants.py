from passlib.context import CryptContext

PASSWORD_CONTEXT = CryptContext(schemes=['bcrypt'])
USED_EMAIL_MESSAGE = "An account with that email already exists"
ACCOUNT_CREATED_MESSAGE = "User Account has been created successfully "
USER_USERNAME_MESSAGE = "An account with that username already exists"