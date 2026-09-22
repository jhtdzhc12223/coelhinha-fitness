/* =========================================
   COELHINHA FITNESS
   STORAGE.JS

   Armazenamento local do aplicativo
========================================= */

const STORAGE_KEY = "coelhinhaFitnessData";


/* =========================================
   DADOS PADRÃO
========================================= */

const dadosPadrao = {
    treinosConcluidos: 0,

    seriesConcluidas: 0,

    cargas: {},

    historico: [],

    diasTreinados: [],

    conquistas: [],

    treinoAtual: null,

    exercicioAtual: null
};


/* =========================================
   CARREGAR DADOS
========================================= */

function carregarDados() {

    const dadosSalvos = localStorage.getItem(STORAGE_KEY);

    if (!dadosSalvos) {
        return {
            ...dadosPadrao,
            cargas: {},
            historico: [],
            diasTreinados: [],
            conquistas: []
        };
    }

    try {

        const dados = JSON.parse(dadosSalvos);

        return {
            ...dadosPadrao,
            ...dados
        };

    } catch (erro) {

        console.error(
            "Não foi possível carregar os dados:",
            erro
        );

        return {
            ...dadosPadrao,
            cargas: {},
            historico: [],
            diasTreinados: [],
            conquistas: []
        };
    }
}


/* =========================================
   SALVAR DADOS
========================================= */

function salvarDados(dados) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(dados)
        );

        return true;

    } catch (erro) {

        console.error(
            "Não foi possível salvar os dados:",
            erro
        );

        return false;
    }
}


/* =========================================
   ATUALIZAR DADOS
========================================= */

function atualizarDados(alteracoes) {

    const dados = carregarDados();

    const dadosAtualizados = {
        ...dados,
        ...alteracoes
    };

    salvarDados(dadosAtualizados);

    return dadosAtualizados;
}


/* =========================================
   CARGAS
========================================= */

/**
 * Retorna a carga registrada para um exercício.
 *
 * Se ela nunca tiver feito o exercício,
 * retorna null.
 */

function obterCarga(exercicioId) {

    const dados = carregarDados();

    if (
        dados.cargas &&
        dados.cargas[exercicioId] !== undefined
    ) {
        return dados.cargas[exercicioId];
    }

    return null;
}


/**
 * Salva a carga utilizada no exercício.
 */

function salvarCarga(exercicioId, carga) {

    const dados = carregarDados();

    if (!dados.cargas) {
        dados.cargas = {};
    }

    dados.cargas[exercicioId] = Number(carga);

    salvarDados(dados);

    return Number(carga);
}


/* =========================================
   REGISTRO DE SÉRIE
========================================= */

function registrarSerie(
    treinoId,
    exercicioId,
    numeroSerie,
    carga,
    repeticoes
) {

    const dados = carregarDados();

    const registro = {
        id: Date.now(),

        data: new Date().toISOString(),

        treinoId,

        exercicioId,

        serie: numeroSerie,

        carga: Number(carga),

        repeticoes
    };


    dados.historico.push(registro);

    dados.seriesConcluidas++;

    salvarDados(dados);

    return registro;
}


/* =========================================
   FINALIZAR TREINO
========================================= */

function finalizarTreino(treinoId) {

    const dados = carregarDados();

    dados.treinosConcluidos++;

    const hoje = obterDataAtual();

    if (!dados.diasTreinados.includes(hoje)) {

        dados.diasTreinados.push(hoje);
    }


    const registroTreino = {

        treinoId,

        data: new Date().toISOString()
    };


    dados.historico.push({
        tipo: "treino-completo",
        ...registroTreino
    });


    dados.treinoAtual = null;

    dados.exercicioAtual = null;


    salvarDados(dados);


    verificarConquistas(dados);


    return dados;
}


/* =========================================
   DATA ATUAL
========================================= */

function obterDataAtual() {

    const agora = new Date();

    const ano = agora.getFullYear();

    const mes = String(
        agora.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        agora.getDate()
    ).padStart(2, "0");


    return `${ano}-${mes}-${dia}`;
}


/* =========================================
   DIAS DE TREINO
========================================= */

function treinoFoiRealizadoNaData(data) {

    const dados = carregarDados();

    return dados.diasTreinados.includes(data);
}


/* =========================================
   TREINO ATUAL
========================================= */

function salvarTreinoAtual(treinoId) {

    atualizarDados({
        treinoAtual: treinoId
    });
}


function obterTreinoAtual() {

    const dados = carregarDados();

    return dados.treinoAtual;
}


/* =========================================
   EXERCÍCIO ATUAL
========================================= */

function salvarExercicioAtual(exercicioId) {

    atualizarDados({
        exercicioAtual: exercicioId
    });
}


function obterExercicioAtual() {

    const dados = carregarDados();

    return dados.exercicioAtual;
}


/* =========================================
   ESTATÍSTICAS
========================================= */

function obterEstatisticas() {

    const dados = carregarDados();

    return {

        treinos: dados.treinosConcluidos,

        series: dados.seriesConcluidas,

        diasTreinados: dados.diasTreinados.length,

        cargasRegistradas:
            Object.keys(dados.cargas).length
    };
}


/* =========================================
   CONQUISTAS
========================================= */

function verificarConquistas(dados) {

    const novasConquistas = [];


    /* Primeiro treino */

    if (
        dados.treinosConcluidos >= 1 &&
        !dados.conquistas.includes("primeiro-treino")
    ) {

        novasConquistas.push(
            "primeiro-treino"
        );
    }


    /* Cinco treinos */

    if (
        dados.treinosConcluidos >= 5 &&
        !dados.conquistas.includes("cinco-treinos")
    ) {

        novasConquistas.push(
            "cinco-treinos"
        );
    }


    /* Dez treinos */

    if (
        dados.treinosConcluidos >= 10 &&
        !dados.conquistas.includes("dez-treinos")
    ) {

        novasConquistas.push(
            "dez-treinos"
        );
    }


    /* Vinte treinos */

    if (
        dados.treinosConcluidos >= 20 &&
        !dados.conquistas.includes("vinte-treinos")
    ) {

        novasConquistas.push(
            "vinte-treinos"
        );
    }


    if (novasConquistas.length > 0) {

        dados.conquistas.push(
            ...novasConquistas
        );

        salvarDados(dados);
    }


    return novasConquistas;
}


/* =========================================
   RESETAR DADOS
========================================= */

/*
   Essa função pode ser útil durante os testes.

   NÃO será chamada automaticamente.
*/

function resetarDados() {

    localStorage.removeItem(STORAGE_KEY);

    console.log(
        "Dados do Coelhinha Fitness foram resetados."
    );
}