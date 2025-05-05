from flask import Flask
from .config import Config
from .extensions import db, migrate, redis_client

def create_app():
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
