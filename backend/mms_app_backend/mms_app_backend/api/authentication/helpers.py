from .constants import password_context


def verify_password(plain_password, hashed_password):
    return password_context.verify(plain_password, hashed_password)
