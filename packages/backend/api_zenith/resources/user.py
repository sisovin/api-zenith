from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
from ..schemas import UserSchema
from ..extensions import db
from ..models import User

user_bp = Blueprint('user_bp', __name__)

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@user_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return users_schema.jsonify(users), 200

@user_bp.route('/users/<uuid:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return user_schema.jsonify(user), 200

@user_bp.route('/users', methods=['POST'])
def create_user():
    try:
        user_data = user_schema.load(request.json)
    except ValidationError as err:
        return jsonify(err.messages), 400

    user = User(**user_data)
    db.session.add(user)
    db.session.commit()
    return user_schema.jsonify(user), 201

@user_bp.route('/users/<uuid:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get_or_404(id)
    try:
        user_data = user_schema.load(request.json)
    except ValidationError as err:
        return jsonify(err.messages), 400

    for key, value in user_data.items():
        setattr(user, key, value)

    db.session.commit()
    return user_schema.jsonify(user), 200

@user_bp.route('/users/<uuid:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get_or_404(id)
    db.session.delete(user)
    db.session.commit()
    return '', 204

@user_bp.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@user_bp.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500
