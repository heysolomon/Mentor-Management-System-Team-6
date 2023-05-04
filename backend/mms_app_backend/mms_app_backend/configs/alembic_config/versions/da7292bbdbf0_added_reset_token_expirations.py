"""Added Reset token Expirations

Revision ID: da7292bbdbf0
Revises: 066c0bca01cc
Create Date: 2023-05-03 13:30:45.061213

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = 'da7292bbdbf0'
down_revision = '066c0bca01cc'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('password_reset_tokens', sa.Column('token', sa.UUID(), nullable=True))
    op.add_column('password_reset_tokens', sa.Column('expires_on', sa.DateTime(), nullable=True))
    op.create_index(op.f('ix_password_reset_tokens_token'), 'password_reset_tokens', ['token'], unique=True)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_password_reset_tokens_token'), table_name='password_reset_tokens')
    op.drop_column('password_reset_tokens', 'expires_on')
    op.drop_column('password_reset_tokens', 'token')
    # ### end Alembic commands ###
