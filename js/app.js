/* =========================================================
   COELHINHA - FITNESS
   APP.JS
   Controle principal do aplicativo
========================================================= */


/* =========================================================
   ESTADO DO APLICATIVO
========================================================= */

let telaAtual = "home-screen";

let treinoSelecionado = null;
let exercicioSelecionado = null;

let serieAtual = 1;

let cargaAtual = 0;

let tempoRestante = 0;
let timerInterval = null;

let dataCalendario = new Date();


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Coelhinha Fitness: aplicativo iniciado.");

    inicializarAplicativo();

});


function inicializarAplicativo() {

    configurarNavegacao();

    configurarBotoesHome();

    configurarBotoesTreino();

    configurarBotoesExercicio();

    configurarBotoesCalendario();

    atualizarSaudacao();

    atualizarEstatisticas();

    renderizarTreinos();

    renderizarCalendario();

    renderizarConquistas();

    mostrarTela("home-screen");

}


/* =========================================================
   NAVEGAÇÃO ENTRE TELAS
========================================================= */

function configurarNavegacao() {

    const botoesNavegacao = document.querySelectorAll(
        ".nav-item[data-screen]"
    );

    botoesNavegacao.forEach((botao) => {

        botao.addEventListener("click", () => {

            const tela = botao.dataset.screen;

            if (!tela) {
                return;
            }

            mostrarTela(tela);

        });

    });

}


/* =========================================================
   MOSTRAR UMA TELA
========================================================= */

function mostrarTela(idTela) {

    const telas = document.querySelectorAll(".screen");

    telas.forEach((tela) => {

        tela.classList.remove("active");

    });


    const telaDestino = document.getElementById(idTela);

    if (!telaDestino) {

        console.error(
            `Tela não encontrada: ${idTela}`
        );

        return;

    }


    telaDestino.classList.add("active");

    telaAtual = idTela;


    atualizarNavegacao(idTela);


    /* Atualizações específicas */

    if (idTela === "home-screen") {

        atualizarSaudacao();
        atualizarEstatisticas();

    }


    if (idTela === "workouts-screen") {

        renderizarTreinos();

    }


    if (idTela === "calendar-screen") {

        renderizarCalendario();

    }


    if (idTela === "progress-screen") {

        atualizarEstatisticas();
        renderizarConquistas();

    }

}


/* =========================================================
   ATUALIZAR MENU INFERIOR
========================================================= */

function atualizarNavegacao(idTela) {

    const botoes = document.querySelectorAll(
        ".nav-item[data-screen]"
    );

    botoes.forEach((botao) => {

        const pertenceATela =
            botao.dataset.screen === idTela;

        botao.classList.toggle(
            "active",
            pertenceATela
        );

    });

}


/* =========================================================
   SAUDAÇÃO
========================================================= */

function atualizarSaudacao() {

    const elemento = document.getElementById("greeting");

    if (!elemento) {
        return;
    }


    const hora = new Date().getHours();

    let saudacao = "Boa noite";

    if (hora >= 5 && hora < 12) {

        saudacao = "Bom dia";

    } else if (hora >= 12 && hora < 18) {

        saudacao = "Boa tarde";

    }


    elemento.textContent =
        `${saudacao}, Fernanda!`;

}


/* =========================================================
   BOTÕES DA HOME
========================================================= */

function configurarBotoesHome() {

    const botaoComecar =
        document.getElementById("start-workout");

    const botaoTreinoHoje =
        document.getElementById("today-workout-button");


    if (botaoComecar) {

        botaoComecar.addEventListener(
            "click",
            () => {

                abrirTreino("treino-a");

            }
        );

    }


    if (botaoTreinoHoje) {

        botaoTreinoHoje.addEventListener(
            "click",
            () => {

                abrirTreino("treino-a");

            }
        );

    }

}


/* =========================================================
   RENDERIZAR LISTA DE TREINOS
========================================================= */

function renderizarTreinos() {

    const container =
        document.getElementById("workouts-list");

    if (!container) {
        return;
    }


    if (
        typeof treinos === "undefined" ||
        !Array.isArray(treinos)
    ) {

        console.error(
            "A variável 'treinos' não foi encontrada."
        );

        container.innerHTML = `
            <div class="empty-state">
                <strong>Não foi possível carregar os treinos.</strong>
                <p>Verifique o arquivo js/treinos.js.</p>
            </div>
        `;

        return;

    }


    container.innerHTML = "";


    treinos.forEach((treino) => {

        const card = document.createElement("article");

        card.className = "workout-card";


        const letra =
            treino.letra ||
            obterLetraTreino(treino.id);


        const quantidade =
            Array.isArray(treino.exercicios)
                ? treino.exercicios.length
                : 0;


        card.innerHTML = `

            <div class="workout-card-top">

                <div class="workout-card-letter">
                    ${letra}
                </div>

                <div class="workout-card-content">

                    <span class="workout-card-label">
                        TREINO ${letra}
                    </span>

                    <h3>
                        ${treino.nome || "Treino"}
                    </h3>

                    <p>
                        ${treino.descricao || "Seu treino personalizado."}
                    </p>

                </div>

                <span class="workout-card-arrow">
                    →
                </span>

            </div>

            <div class="workout-card-bottom">

                <span>
                    ${quantidade} exercícios
                </span>

                <span>
                    ✦
                </span>

                <span>
                    Personalizado para você
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                abrirTreino(treino.id);

            }
        );


        container.appendChild(card);

    });

}


/* =========================================================
   OBTER LETRA DO TREINO
========================================================= */

function obterLetraTreino(id) {

    if (!id) {
        return "?";
    }


    const partes =
        String(id).split("-");


    const ultimaParte =
        partes[partes.length - 1];


    return ultimaParte
        ? ultimaParte.toUpperCase()
        : "?";

}


/* =========================================================
   CONFIGURAR BOTÕES DE TREINO
========================================================= */

function configurarBotoesTreino() {

    const voltarTreinos =
        document.getElementById(
            "back-to-workouts"
        );


    if (voltarTreinos) {

        voltarTreinos.addEventListener(
            "click",
            () => {

                mostrarTela("workouts-screen");

            }
        );

    }


    const finalizar =
        document.getElementById(
            "finish-workout"
        );


    if (finalizar) {

        finalizar.addEventListener(
            "click",
            concluirTreinoAtual
        );

    }

}


/* =========================================================
   ABRIR TREINO
========================================================= */

function abrirTreino(idTreino) {

    if (
        typeof encontrarTreino !== "function"
    ) {

        console.error(
            "A função encontrarTreino não existe."
        );

        return;

    }


    const treino =
        encontrarTreino(idTreino);


    if (!treino) {

        console.error(
            `Treino não encontrado: ${idTreino}`
        );

        mostrarMensagem(
            "Não foi possível encontrar esse treino."
        );

        return;

    }


    treinoSelecionado = treino;

    serieAtual = 1;


    /* Salva o treino atual */

    if (
        typeof salvarTreinoAtual === "function"
    ) {

        salvarTreinoAtual(
            treino.id
        );

    }


    atualizarDetalhesTreino();


    mostrarTela(
        "workout-detail-screen"
    );

}


/* =========================================================
   ATUALIZAR DETALHES DO TREINO
========================================================= */

function atualizarDetalhesTreino() {

    if (!treinoSelecionado) {
        return;
    }


    const titulo =
        document.getElementById(
            "workout-title"
        );


    const descricao =
        document.getElementById(
            "workout-description"
        );


    const lista =
        document.getElementById(
            "exercise-list"
        );


    const quantidadeExercicios =
        document.getElementById(
            "workout-exercise-count"
        );


    const quantidadeSeries =
        document.getElementById(
            "workout-set-count"
        );


    if (titulo) {

        titulo.textContent =
            treinoSelecionado.nome ||
            "Treino";

    }


    if (descricao) {

        descricao.textContent =
            treinoSelecionado.descricao ||
            "Treino personalizado.";

    }


    const exercicios =
        Array.isArray(
            treinoSelecionado.exercicios
        )
            ? treinoSelecionado.exercicios
            : [];


    if (quantidadeExercicios) {

        quantidadeExercicios.textContent =
            exercicios.length;

    }


    if (quantidadeSeries) {

        quantidadeSeries.textContent =
            calcularTotalSeries(exercicios);

    }


    if (!lista) {
        return;
    }


    lista.innerHTML = "";


    exercicios.forEach(
        (exercicio, indice) => {

            const card =
                document.createElement("article");


            card.className =
                "exercise-card";


            const numero =
                indice + 1;


            const carga =
                obterCargaSegura(
                    exercicio.id,
                    exercicio.cargaSugerida
                );


            card.innerHTML = `

                <div class="exercise-number">
                    ${numero}
                </div>

                <div class="exercise-card-content">

                    <span class="exercise-category">
                        ${exercicio.categoria || "Exercício"}
                    </span>

                    <h3>
                        ${exercicio.nome}
                    </h3>

                    <p>
                        ${exercicio.series} séries
                        •
                        ${exercicio.repeticoes} reps
                    </p>

                </div>

                <div class="exercise-card-right">

                    <span class="exercise-load">
                        ${formatarCarga(carga)}
                    </span>

                    <span class="exercise-arrow">
                        →
                    </span>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    abrirExercicio(
                        exercicio.id
                    );

                }
            );


            lista.appendChild(card);

        }
    );

}


/* =========================================================
   CALCULAR TOTAL DE SÉRIES
========================================================= */

function calcularTotalSeries(exercicios) {

    if (!Array.isArray(exercicios)) {
        return 0;
    }


    return exercicios.reduce(
        (total, exercicio) => {

            const series =
                Number(
                    exercicio.series
                ) || 0;

            return total + series;

        },
        0
    );

}


/* =========================================================
   CONFIGURAR BOTÕES DO EXERCÍCIO
========================================================= */

function configurarBotoesExercicio() {

    const voltar =
        document.getElementById(
            "back-to-workout"
        );


    if (voltar) {

        voltar.addEventListener(
            "click",
            () => {

                pararTimer();

                mostrarTela(
                    "workout-detail-screen"
                );

            }
        );

    }


    const diminuir =
        document.getElementById(
            "decrease-load"
        );


    if (diminuir) {

        diminuir.addEventListener(
            "click",
            () => {

                alterarCarga(-1);

            }
        );

    }


    const aumentar =
        document.getElementById(
            "increase-load"
        );


    if (aumentar) {

        aumentar.addEventListener(
            "click",
            () => {

                alterarCarga(1);

            }
        );

    }


    const completar =
        document.getElementById(
            "complete-set"
        );


    if (completar) {

        completar.addEventListener(
            "click",
            concluirSerie
        );

    }


    const pular =
        document.getElementById(
            "skip-rest"
        );


    if (pular) {

        pular.addEventListener(
            "click",
            () => {

                pararTimer();

                esconderTimer();

            }
        );

    }

}


/* =========================================================
   ABRIR EXERCÍCIO
========================================================= */

function abrirExercicio(idExercicio) {

    if (
        typeof encontrarExercicio !== "function"
    ) {

        console.error(
            "A função encontrarExercicio não existe."
        );

        return;

    }


    const exercicio =
        encontrarExercicio(idExercicio);


    if (!exercicio) {

        console.error(
            `Exercício não encontrado: ${idExercicio}`
        );

        mostrarMensagem(
            "Não foi possível encontrar esse exercício."
        );

        return;

    }


    exercicioSelecionado =
        exercicio;


    serieAtual = 1;


    const cargaSalva =
        obterCargaSegura(
            exercicio.id,
            exercicio.cargaSugerida
        );


    cargaAtual =
        Number(cargaSalva) || 0;


    if (
        typeof salvarExercicioAtual === "function"
    ) {

        salvarExercicioAtual(
            exercicio.id
        );

    }


    atualizarTelaExercicio();


    esconderTimer();


    mostrarTela(
        "exercise-screen"
    );

}


/* =========================================================
   ATUALIZAR TELA DO EXERCÍCIO
========================================================= */

function atualizarTelaExercicio() {

    if (!exercicioSelecionado) {
        return;
    }


    const nome =
        document.getElementById(
            "exercise-name"
        );


    const descricao =
        document.getElementById(
            "exercise-description"
        );


    const series =
        document.getElementById(
            "exercise-sets"
        );


    const repeticoes =
        document.getElementById(
            "exercise-reps"
        );


    const descanso =
        document.getElementById(
            "exercise-rest"
        );


    const carga =
        document.getElementById(
            "current-load"
        );


    const ultimaCarga =
        document.getElementById(
            "last-load"
        );


    const serie =
        document.getElementById(
            "current-set"
        );


    const totalSeries =
        document.getElementById(
            "total-sets"
        );


    const numeroSerie =
        document.getElementById(
            "set-number"
        );


    if (nome) {

        nome.textContent =
            exercicioSelecionado.nome;

    }


    if (descricao) {

        descricao.textContent =
            exercicioSelecionado.instrucao ||
            exercicioSelecionado.observacao ||
            "Execute o movimento com controle.";

    }


    if (series) {

        series.textContent =
            exercicioSelecionado.series;

    }


    if (repeticoes) {

        repeticoes.textContent =
            exercicioSelecionado.repeticoes;

    }


    if (descanso) {

        descanso.textContent =
            formatarTempoCurto(
                exercicioSelecionado.descanso
            );

    }


    if (carga) {

        carga.textContent =
            formatarNumero(
                cargaAtual
            );

    }


    if (ultimaCarga) {

        const ultima =
            obterCargaAnterior(
                exercicioSelecionado.id
            );


        ultimaCarga.textContent =
            ultima !== null
                ? `${formatarNumero(ultima)} kg`
                : "—";

    }


    if (serie) {

        serie.textContent =
            serieAtual;

    }


    if (totalSeries) {

        totalSeries.textContent =
            exercicioSelecionado.series;

    }


    if (numeroSerie) {

        numeroSerie.textContent =
            serieAtual;

    }

}


/* =========================================================
   ALTERAR CARGA
========================================================= */

function alterarCarga(valor) {

    if (!exercicioSelecionado) {
        return;
    }


    let novaCarga =
        Number(cargaAtual) || 0;


    /*
       Aqui usamos incrementos de 1 kg.
       Mais tarde podemos fazer o sistema
       reconhecer halteres e máquinas.
    */

    novaCarga += valor;


    if (novaCarga < 0) {

        novaCarga = 0;

    }


    cargaAtual =
        Number(
            novaCarga.toFixed(1)
        );


    salvarCargaSegura(
        exercicioSelecionado.id,
        cargaAtual
    );


    atualizarTelaExercicio();

}


/* =========================================================
   CONCLUIR UMA SÉRIE
========================================================= */

function concluirSerie() {

    if (!treinoSelecionado) {

        console.error(
            "Nenhum treino selecionado."
        );

        return;

    }


    if (!exercicioSelecionado) {

        console.error(
            "Nenhum exercício selecionado."
        );

        return;

    }


    const totalSeries =
        Number(
            exercicioSelecionado.series
        ) || 0;


    /*
       Registra a série no storage.
    */

    if (
        typeof registrarSerie === "function"
    ) {

        registrarSerie(
            treinoSelecionado.id,
            exercicioSelecionado.id,
            serieAtual,
            cargaAtual,
            exercicioSelecionado.repeticoes
        );

    }


    /*
       Se ainda existem séries,
       passa para a próxima depois do descanso.
    */

    if (serieAtual < totalSeries) {

        iniciarDescanso(
            Number(
                exercicioSelecionado.descanso
            ) || 60
        );

        serieAtual++;

        atualizarTelaExercicio();

        return;

    }


    /*
       Última série concluída.
    */

    mostrarMensagem(
        "Exercício concluído! ✦"
    );


    serieAtual = totalSeries;

    atualizarTelaExercicio();

}


/* =========================================================
   INICIAR DESCANSO
========================================================= */

function iniciarDescanso(segundos) {

    pararTimer();


    tempoRestante =
        Number(segundos) || 60;


    const timer =
        document.getElementById(
            "rest-timer"
        );


    if (timer) {

        timer.classList.remove(
            "hidden"
        );

    }


    atualizarDisplayTimer();


    timerInterval =
        setInterval(
            () => {

                tempoRestante--;


                atualizarDisplayTimer();


                if (tempoRestante <= 0) {

                    pararTimer();

                    esconderTimer();

                    mostrarMensagem(
                        "Descanso finalizado. Vamos para a próxima! ✦"
                    );

                }

            },
            1000
        );

}


/* =========================================================
   ATUALIZAR DISPLAY DO TIMER
========================================================= */

function atualizarDisplayTimer() {

    const display =
        document.getElementById(
            "timer-display"
        );


    if (!display) {
        return;
    }


    display.textContent =
        formatarTempoTimer(
            tempoRestante
        );

}


/* =========================================================
   PARAR TIMER
========================================================= */

function pararTimer() {

    if (timerInterval !== null) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;

    }

}


/* =========================================================
   ESCONDER TIMER
========================================================= */

function esconderTimer() {

    const timer =
        document.getElementById(
            "rest-timer"
        );


    if (timer) {

        timer.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   FORMATAR TIMER
========================================================= */

function formatarTempoTimer(segundos) {

    const total =
        Math.max(
            0,
            Number(segundos) || 0
        );


    const minutos =
        Math.floor(
            total / 60
        );


    const segundosRestantes =
        total % 60;


    return `${String(minutos).padStart(2, "0")}:${String(
        segundosRestantes
    ).padStart(2, "0")}`;

}


/* =========================================================
   FORMATAR DESCANSO
========================================================= */

function formatarTempoCurto(segundos) {

    const total =
        Number(segundos) || 0;


    if (total < 60) {

        return `${total}s`;

    }


    const minutos =
        Math.floor(
            total / 60
        );


    const segundosRestantes =
        total % 60;


    if (segundosRestantes === 0) {

        return `${minutos} min`;

    }


    return `${minutos}m ${segundosRestantes}s`;

}


/* =========================================================
   CONCLUIR TREINO
========================================================= */

function concluirTreinoAtual() {

    if (!treinoSelecionado) {

        mostrarMensagem(
            "Nenhum treino está aberto."
        );

        return;

    }


    if (
        typeof finalizarTreino === "function"
    ) {

        finalizarTreino(
            treinoSelecionado.id
        );

    }


    pararTimer();


    mostrarMensagem(
        "Treino concluído! Orgulho de você, Coelhinha ❤️"
    );


    atualizarEstatisticas();


    setTimeout(
        () => {

            mostrarTela(
                "home-screen"
            );

        },
        900
    );

}


/* =========================================================
   ESTATÍSTICAS
========================================================= */

function atualizarEstatisticas() {

    let estatisticas = {
        treinosConcluidos: 0,
        seriesConcluidas: 0,
        conquistas: []
    };


    if (
        typeof obterEstatisticas === "function"
    ) {

        const dados =
            obterEstatisticas();


        if (dados) {

            estatisticas =
                dados;

        }

    }


    const treinos =
        document.getElementById(
            "workout-count"
        );


    const conquistas =
        document.getElementById(
            "achievement-count"
        );


    const progressTreinos =
        document.getElementById(
            "progress-workouts"
        );


    const progressSeries =
        document.getElementById(
            "progress-sets"
        );


    if (treinos) {

        treinos.textContent =
            estatisticas.treinosConcluidos || 0;

    }


    if (conquistas) {

        conquistas.textContent =
            Array.isArray(
                estatisticas.conquistas
            )
                ? estatisticas.conquistas.length
                : 0;

    }


    if (progressTreinos) {

        progressTreinos.textContent =
            estatisticas.treinosConcluidos || 0;

    }


    if (progressSeries) {

        progressSeries.textContent =
            estatisticas.seriesConcluidas || 0;

    }

}


/* =========================================================
   CALENDÁRIO
========================================================= */

function configurarBotoesCalendario() {

    const anterior =
        document.getElementById(
            "previous-month"
        );


    const proximo =
        document.getElementById(
            "next-month"
        );


    if (anterior) {

        anterior.addEventListener(
            "click",
            () => {

                dataCalendario.setMonth(
                    dataCalendario.getMonth() - 1
                );

                renderizarCalendario();

            }
        );

    }


    if (proximo) {

        proximo.addEventListener(
            "click",
            () => {

                dataCalendario.setMonth(
                    dataCalendario.getMonth() + 1
                );

                renderizarCalendario();

            }
        );

    }

}


/* =========================================================
   RENDERIZAR CALENDÁRIO
========================================================= */

function renderizarCalendario() {

    const grid =
        document.getElementById(
            "calendar-grid"
        );


    const titulo =
        document.getElementById(
            "calendar-month"
        );


    if (!grid) {
        return;
    }


    const ano =
        dataCalendario.getFullYear();


    const mes =
        dataCalendario.getMonth();


    const primeiroDia =
        new Date(
            ano,
            mes,
            1
        );


    const ultimoDia =
        new Date(
            ano,
            mes + 1,
            0
        );


    const quantidadeDias =
        ultimoDia.getDate();


    const inicioSemana =
        primeiroDia.getDay();


    if (titulo) {

        titulo.textContent =
            dataCalendario.toLocaleDateString(
                "pt-BR",
                {
                    month: "long",
                    year: "numeric"
                }
            );

    }


    grid.innerHTML = "";


    /*
       Espaços antes do primeiro dia.
    */

    for (
        let i = 0;
        i < inicioSemana;
        i++
    ) {

        const vazio =
            document.createElement("span");

        vazio.className =
            "calendar-day empty";

        grid.appendChild(vazio);

    }


    /*
       Dias do mês.
    */

    for (
        let dia = 1;
        dia <= quantidadeDias;
        dia++
    ) {

        const elemento =
            document.createElement("button");


        elemento.type = "button";

        elemento.className =
            "calendar-day";


        elemento.textContent =
            dia;


        const data =
            criarDataFormatada(
                ano,
                mes,
                dia
            );


        if (
            treinoFoiRealizadoSeguro(
                data
            )
        ) {

            elemento.classList.add(
                "trained"
            );

        }


        if (
            ehHoje(
                ano,
                mes,
                dia
            )
        ) {

            elemento.classList.add(
                "today"
            );

        }


        grid.appendChild(
            elemento
        );

    }

}


/* =========================================================
   CRIAR DATA YYYY-MM-DD
========================================================= */

function criarDataFormatada(
    ano,
    mes,
    dia
) {

    const mesFormatado =
        String(
            mes + 1
        ).padStart(
            2,
            "0"
        );


    const diaFormatado =
        String(
            dia
        ).padStart(
            2,
            "0"
        );


    return `${ano}-${mesFormatado}-${diaFormatado}`;

}


/* =========================================================
   VERIFICAR SE É HOJE
========================================================= */

function ehHoje(
    ano,
    mes,
    dia
) {

    const hoje =
        new Date();


    return (
        hoje.getFullYear() === ano &&
        hoje.getMonth() === mes &&
        hoje.getDate() === dia
    );

}


/* =========================================================
   CONQUISTAS
========================================================= */

function renderizarConquistas() {

    const container =
        document.getElementById(
            "achievements-list"
        );


    if (!container) {
        return;
    }


    let conquistas = [];


    if (
        typeof obterEstatisticas === "function"
    ) {

        const estatisticas =
            obterEstatisticas();


        if (
            estatisticas &&
            Array.isArray(
                estatisticas.conquistas
            )
        ) {

            conquistas =
                estatisticas.conquistas;

        }

    }


    const listaPadrao = [

        {
            id: "primeiro-treino",
            titulo: "Primeiro passo",
            descricao: "Complete seu primeiro treino.",
            icone: "✦"
        },

        {
            id: "cinco-treinos",
            titulo: "Ritmo criado",
            descricao: "Complete 5 treinos.",
            icone: "♡"
        },

        {
            id: "dez-treinos",
            titulo: "Constância",
            descricao: "Complete 10 treinos.",
            icone: "✿"
        },

        {
            id: "vinte-treinos",
            titulo: "Foco total",
            descricao: "Complete 20 treinos.",
            icone: "☼"
        }

    ];


    container.innerHTML = "";


    listaPadrao.forEach(
        (conquista) => {

            const desbloqueada =
                conquistas.includes(
                    conquista.id
                );


            const card =
                document.createElement("article");


            card.className =
                "achievement-card";


            if (desbloqueada) {

                card.classList.add(
                    "unlocked"
                );

            }


            card.innerHTML = `

                <div class="achievement-icon">
                    ${conquista.icone}
                </div>

                <div class="achievement-content">

                    <strong>
                        ${conquista.titulo}
                    </strong>

                    <span>
                        ${conquista.descricao}
                    </span>

                </div>

                <div class="achievement-status">
                    ${desbloqueada ? "✓" : "○"}
                </div>

            `;


            container.appendChild(card);

        }
    );

}


/* =========================================================
   SISTEMA DE MENSAGENS
========================================================= */

function mostrarMensagem(texto) {

    const mensagemAnterior =
        document.querySelector(
            ".temporary-message"
        );


    if (mensagemAnterior) {

        mensagemAnterior.remove();

    }


    const mensagem =
        document.createElement("div");


    mensagem.className =
        "temporary-message";


    mensagem.textContent =
        texto;


    document.body.appendChild(
        mensagem
    );


    requestAnimationFrame(
        () => {

            mensagem.classList.add(
                "show"
            );

        }
    );


    setTimeout(
        () => {

            mensagem.classList.remove(
                "show"
            );


            setTimeout(
                () => {

                    mensagem.remove();

                },
                300
            );

        },
        2500
    );

}


/* =========================================================
   STORAGE - FUNÇÕES SEGURAS
========================================================= */

function obterCargaSegura(
    exercicioId,
    cargaPadrao
) {

    if (
        typeof obterCarga === "function"
    ) {

        const salva =
            obterCarga(
                exercicioId
            );


        if (
            salva !== null &&
            salva !== undefined &&
            salva !== ""
        ) {

            return Number(salva);

        }

    }


    return Number(
        cargaPadrao
    ) || 0;

}


function salvarCargaSegura(
    exercicioId,
    carga
) {

    if (
        typeof salvarCarga === "function"
    ) {

        salvarCarga(
            exercicioId,
            carga
        );

    }

}


/* =========================================================
   PEGAR CARGA ANTERIOR
========================================================= */

function obterCargaAnterior(
    exercicioId
) {

    try {

        const dados =
            typeof carregarDados === "function"
                ? carregarDados()
                : null;


        if (
            !dados ||
            !Array.isArray(
                dados.historico
            )
        ) {

            return null;

        }


        for (
            let i = dados.historico.length - 1;
            i >= 0;
            i--
        ) {

            const registro =
                dados.historico[i];


            if (
                registro.exercicioId ===
                exercicioId
            ) {

                return Number(
                    registro.carga
                ) || 0;

            }

        }


        return null;

    } catch (erro) {

        console.error(
            "Erro ao buscar carga anterior:",
            erro
        );

        return null;

    }

}


/* =========================================================
   VERIFICAR TREINO NO CALENDÁRIO
========================================================= */

function treinoFoiRealizadoSeguro(
    data
) {

    if (
        typeof treinoFoiRealizadoNaData ===
        "function"
    ) {

        return treinoFoiRealizadoNaData(
            data
        );

    }


    return false;

}


/* =========================================================
   FORMATAÇÃO DE CARGA
========================================================= */

function formatarCarga(carga) {

    const valor =
        Number(carga) || 0;


    if (valor === 0) {

        return "Peso corporal";

    }


    return `${formatarNumero(valor)} kg`;

}


function formatarNumero(numero) {

    const valor =
        Number(numero) || 0;


    if (
        Number.isInteger(valor)
    ) {

        return String(valor);

    }


    return valor
        .toFixed(1)
        .replace(
            ".",
            ","
        );

}


/* =========================================================
   CALCULAR TEMPO TOTAL
========================================================= */

function obterTempoEstimadoTreino(
    treino
) {

    if (
        !treino ||
        !Array.isArray(
            treino.exercicios
        )
    ) {

        return 0;

    }


    let segundos = 0;


    treino.exercicios.forEach(
        (exercicio) => {

            const series =
                Number(
                    exercicio.series
                ) || 0;


            const descanso =
                Number(
                    exercicio.descanso
                ) || 0;


            segundos +=
                series *
                descanso;

        }
    );


    return segundos;

}


/* =========================================================
   LIMPEZA AO SAIR DA PÁGINA
========================================================= */

window.addEventListener(
    "beforeunload",
    () => {

        pararTimer();

    }
);


/* =========================================================
   DEBUG
========================================================= */

console.log(
    "Coelhinha Fitness - app.js carregado corretamente."
);