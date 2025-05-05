import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Configuration class for the Flask application.

    This class loads configuration variables from environment variables and
    provides support for production and development profiles.

    Attributes:
        FLASK_ENV (str): The environment in which the Flask app is running.
        FLASK_APP (str): The name of the Flask application.
        DATABASE_URL (str): The URL for the database connection.
        REDIS_URL (str): The URL for the Redis connection.
    """

    FLASK_ENV: str = os.getenv('FLASK_ENV', 'production')
    FLASK_APP: str = os.getenv('FLASK_APP', 'api_zenith')
    DATABASE_URL: str = os.getenv('DATABASE_URL')
    REDIS_URL: str = os.getenv('REDIS_URL')

    @staticmethod
    def init_app(app):
        """Initialize the Flask application with the appropriate configuration.

        Args:
            app (Flask): The Flask application instance to configure.
        """
        if Config.FLASK_ENV == 'development':
            app.config.from_object('config.DevelopmentConfig')
        else:
            app.config.from_object('config.ProductionConfig')


class DevelopmentConfig(Config):
    """Development configuration class.

    This class inherits from the base Config class and provides additional
    configuration options specific to the development environment.
    """
    DEBUG: bool = True
    SQLALCHEMY_ECHO: bool = True


class ProductionConfig(Config):
    """Production configuration class.

    This class inherits from the base Config class and provides additional
    configuration options specific to the production environment.
    """
    DEBUG: bool = False
    SQLALCHEMY_ECHO: bool = False
