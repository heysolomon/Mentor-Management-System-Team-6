from passlib.context import CryptContext

PASSWORD_CONTEXT = CryptContext(schemes=['bcrypt'])
USED_EMAIL_MESSAGE = "An account with that email already exists"
ACCOUNT_CREATED_MESSAGE = "User Account has been created successfully "
USED_USERNAME_MESSAGE = "An account with that username already exists"
USER_NOT_FOUND_MESSAGE= "User not found"
INVALID_CREDENTIALS_MESSAGE = "The passwod provided is not correct"
ACCESS_TOKEN_CREATED_MESSAGE="The access_token has been created and user has logged In successfully"
