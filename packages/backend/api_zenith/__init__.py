from flask import Flask
from .config import Config
from .extensions import db, migrate, redis_client
from typing import Any

def create_app() -> Flask:
    """Create and configure the Flask application.

    This function initializes the Flask application, configures it using the
    Config class, initializes extensions, and registers blueprints.

    Returns:
        Flask: The configured Flask application instance.
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    redis_client.init_app(app)

    # Register blueprints
    from .views import main
    app.register_blueprint(main)

    return app
