const botaoBuscar = document.getElementById('buscar-btn');
const campoCEP = document.getElementById('cep');
const resultado = document.getElementById('resultado');

botaoBuscar.addEventListener('click', buscarCEP);
campoCEP.addEventListener('input', formatarCEP);
campoCEP.addEventListener('keydown', buscarComEnter);

function formatarCEP(event) {

    const digitos = event.target.value.replace(/\D/g, '').slice(0, 8);

    if (digitos.length > 5) {
        event.target.value = `${digitos.slice(0, 5)}-${digitos.slice(5)}`;
        return;
    }

    event.target.value = digitos;
}

function buscarComEnter(event) {

    if (event.key === 'Enter') {
        buscarCEP();
    }
}

function renderizarEstado(titulo, descricao, classeEstado, badge) {

    resultado.innerHTML = `
        <div class="result-state ${classeEstado}">
            <span class="placeholder-badge">${badge}</span>
            <h2>${titulo}</h2>
            <p>${descricao}</p>
        </div>
    `;
}

function montarValor(valor) {
    return valor || 'Nao informado';
}

function renderizarResultado(dados, cep) {

    resultado.innerHTML = `
        <div class="result-card">
            <div class="result-card-header">
                <div>
                    <span class="panel-kicker">Consulta concluida</span>
                    <h2>${montarValor(dados.logradouro)}</h2>
                    <p>CEP consultado: ${cep}</p>
                </div>
                <span class="result-badge">Valido</span>
            </div>

            <div class="result-grid">
                <div class="result-item">
                    <span>Bairro</span>
                    <strong>${montarValor(dados.bairro)}</strong>
                </div>
                <div class="result-item">
                    <span>Cidade</span>
                    <strong>${montarValor(dados.localidade)}</strong>
                </div>
                <div class="result-item">
                    <span>Estado</span>
                    <strong>${montarValor(dados.uf)}</strong>
                </div>
                <div class="result-item">
                    <span>IBGE</span>
                    <strong>${montarValor(dados.ibge)}</strong>
                </div>
            </div>
        </div>
    `;
}

async function buscarCEP() {

    const cep = campoCEP.value.trim();

    if (!cep) {

        renderizarEstado(
            'Informe um CEP',
            'Digite um CEP antes de iniciar a busca para carregar os dados do endereco.',
            'is-error',
            'Atencao'
        );

        return;
    }

    renderizarEstado(
        'Buscando endereco',
        'Estamos consultando a base do ViaCEP para montar a ficha do endereco.',
        'is-loading',
        'Processando'
    );

    try {

        const response = await fetch(`/api/cep/${cep}`);

        const dados = await response.json();

        if (dados.erro) {

            renderizarEstado(
                'CEP nao encontrado',
                dados.erro,
                'is-error',
                'Erro'
            );

            return;
        }

        renderizarResultado(dados, cep);

    } catch (error) {

        renderizarEstado(
            'Falha na consulta',
            'Nao foi possivel buscar o CEP agora. Tente novamente em instantes.',
            'is-error',
            'Indisponivel'
        );
    }
}