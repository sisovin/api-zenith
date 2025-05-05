from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
from ..schemas import ProductSchema
from ..extensions import db
from ..models import Product

product_bp = Blueprint('product_bp', __name__)

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

@product_bp.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return products_schema.jsonify(products), 200

@product_bp.route('/products/<int:id>', methods=['GET'])
def get_product(id):
    product = Product.query.get_or_404(id)
    return product_schema.jsonify(product), 200

@product_bp.route('/products', methods=['POST'])
def create_product():
    try:
        product_data = product_schema.load(request.json)
    except ValidationError as err:
        return jsonify(err.messages), 400

    product = Product(**product_data)
    db.session.add(product)
    db.session.commit()
    return product_schema.jsonify(product), 201

@product_bp.route('/products/<int:id>', methods=['PUT'])
def update_product(id):
    product = Product.query.get_or_404(id)
    try:
        product_data = product_schema.load(request.json)
    except ValidationError as err:
        return jsonify(err.messages), 400

    for key, value in product_data.items():
        setattr(product, key, value)

    db.session.commit()
    return product_schema.jsonify(product), 200

@product_bp.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get_or_404(id)
    db.session.delete(product)
    db.session.commit()
    return '', 204

@product_bp.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@product_bp.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500
