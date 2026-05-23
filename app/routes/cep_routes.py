from flask import Blueprint, jsonify, render_template

from app.services.viacep_service import buscar_cep_service

cep_bp = Blueprint('cep', __name__)


@cep_bp.route('/')
def home():
    return render_template('index.html')


@cep_bp.route('/api/cep/<cep>')
def buscar_cep(cep):
    dados = buscar_cep_service(cep)
    return jsonify(dados)