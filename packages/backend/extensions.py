"""
This module initializes and configures the extensions used in the Flask application.

The extensions include:
- Flask-SQLAlchemy for database interactions
- Flask-Migrate for database migrations
- Flask-Redis for Redis interactions
"""

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_redis import FlaskRedis

db: SQLAlchemy = SQLAlchemy()
migrate: Migrate = Migrate()
redis_client: FlaskRedis = FlaskRedis()
