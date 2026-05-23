import requests

def buscar_cep_service(cep):

    cep = cep.replace('-', '').strip()

    url = f'https://viacep.com.br/ws/{cep}/json/'

    response = requests.get(url)

    if response.status_code != 200:
        return {
            'erro': 'Erro ao buscar CEP'
        }

    dados = response.json()

    if 'erro' in dados:
        return {
            'erro': 'CEP não encontrado'
        }

    return dados