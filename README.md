# CEP Searcher

Aplicacao web para consulta de enderecos brasileiros a partir do CEP, com interface objetiva, retorno estruturado e integracao com a API publica do ViaCEP.

![Homepage do CEP Searcher](app/static/images/home-page.png)

## Sobre o projeto

O CEP Searcher foi desenvolvido para oferecer uma experiencia simples e confiavel de consulta de CEPs, centralizando em uma unica tela as principais informacoes de endereco retornadas pela base do ViaCEP.

Com proposta visual institucional e navegacao direta, a aplicacao permite que usuarios realizem buscas com rapidez, visualizem os dados mais relevantes de forma organizada e contem com feedback claro durante todo o processo de consulta.

## Principais recursos

- Consulta de CEP com ou sem hifen.
- Integracao com a API ViaCEP para obtencao dos dados oficiais.
- Exibicao clara de logradouro, bairro, cidade, UF e codigo IBGE.
- Feedback visual para estados de carregamento, sucesso e erro.
- Interface responsiva, pensada para desktop e dispositivos moveis.

## Visao funcional

Ao informar um CEP valido, a aplicacao realiza a consulta no endpoint interno da solucao, que por sua vez consome o servico do ViaCEP e devolve os dados em formato JSON para renderizacao imediata na interface.

Esse fluxo separa a camada de apresentacao da camada de integracao, favorecendo manutencao, clareza de codigo e evolucao futura do projeto.

## Tecnologias utilizadas

- Python
- Flask
- Requests
- HTML5
- CSS3
- JavaScript
- ViaCEP

## Estrutura do projeto

```text
cep-searcher/
|-- app/
|   |-- routes/
|   |   `-- cep_routes.py
|   |-- services/
|   |   `-- viacep_service.py
|   |-- static/
|   |   |-- css/
|   |   |-- images/
|   |   `-- js/
|   `-- templates/
|       `-- index.html
|-- config.py
|-- requirements.txt
`-- run.py
```

## Como executar localmente

1. Clone este repositorio.
2. Crie e ative um ambiente virtual Python.
3. Instale as dependencias:

```bash
pip install -r requirements.txt
```

4. Inicie a aplicacao:

```bash
python run.py
```

5. Acesse no navegador:

```text
http://127.0.0.1:5000
```

## Endpoint da aplicacao

O projeto disponibiliza um endpoint interno para consulta:

```text
GET /api/cep/<cep>
```

Exemplo:

```text
GET /api/cep/01001-000
```

## Beneficios da solucao

- Padroniza a consulta de enderecos em uma interface unica.
- Reduz atrito operacional na busca manual de informacoes de CEP.
- Facilita reutilizacao da logica de consulta em futuras integracoes.
- Serve como base leve para estudos, demonstracoes e evolucoes corporativas.

## Colaboradores

- Vinicius Eduardo
- Joao Victor

## Licenca

Este projeto esta disponibilizado sob a licenca definida no arquivo LICENSE.
