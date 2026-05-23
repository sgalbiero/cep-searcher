from flask import Flask

def create_app():

    app = Flask(__name__)

    from .routes.cep_routes import cep_bp
    app.register_blueprint(cep_bp)

    return app