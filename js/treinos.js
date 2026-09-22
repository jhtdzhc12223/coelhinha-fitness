/* =========================================================
   COELHINHA - FITNESS
   TREINOS.JS
   Dados dos treinos e exercícios
========================================================= */


/* =========================================================
   TREINO A
   PEITO, OMBROS & TRÍCEPS
========================================================= */

const treinoA = {

    id: "treino-a",

    letra: "A",

    nome: "Peito, Ombros & Tríceps",

    descricao:
        "Um treino completo para desenvolver força, controle e definição na parte superior do corpo.",

    exercicios: [

        {
            id: "supino-halteres",

            nome: "Supino reto com halteres",

            categoria: "Peito",

            series: 3,

            repeticoes: "8–10",

            descanso: 180,

            cargaSugerida: 7,

            equipamento: "Halteres",

            instrucao:
                "Deite-se no banco, mantenha os pés firmes no chão e desça os halteres de forma controlada. Empurre para cima sem perder o controle do movimento.",

            observacao:
                "Priorize amplitude confortável e execução controlada."
        },


        {
            id: "crucifixo-maquina",

            nome: "Crucifixo na máquina",

            categoria: "Peito",

            series: 3,

            repeticoes: "10–12",

            descanso: 150,

            cargaSugerida: 20,

            equipamento: "Máquina",

            instrucao:
                "Mantenha o peito aberto e faça o movimento aproximando os braços de forma controlada. Evite usar impulso.",

            observacao:
                "Concentre-se no alongamento e na contração do peitoral."
        },


        {
            id: "elevacao-lateral",

            nome: "Elevação lateral",

            categoria: "Ombros",

            series: 3,

            repeticoes: "10–12",

            descanso: 150,

            cargaSugerida: 4,

            equipamento: "Halteres",

            instrucao:
                "Eleve os braços lateralmente até próximo da linha dos ombros, mantendo o movimento controlado.",

            observacao:
                "Evite balançar o corpo para gerar impulso."
        },


        {
            id: "desenvolvimento-ombros",

            nome: "Desenvolvimento de ombros",

            categoria: "Ombros",

            series: 3,

            repeticoes: "8–10",

            descanso: 180,

            cargaSugerida: 20,

            equipamento: "Máquina",

            instrucao:
                "Empurre a carga para cima mantendo o tronco estável. Desça lentamente até uma amplitude confortável.",

            observacao:
                "Mantenha o movimento firme e controlado."
        },


        {
            id: "triceps-corda",

            nome: "Tríceps na polia com corda",

            categoria: "Tríceps",

            series: 3,

            repeticoes: "10–12",

            descanso: 150,

            cargaSugerida: 12,

            equipamento: "Polia",

            instrucao:
                "Mantenha os cotovelos próximos ao corpo e empurre a corda para baixo até estender os braços.",

            observacao:
                "Evite movimentar excessivamente os ombros."
        },


        {
            id: "triceps-frances",

            nome: "Tríceps francês com halter",

            categoria: "Tríceps",

            series: 2,

            repeticoes: "10–12",

            descanso: 150,

            cargaSugerida: 7,

            equipamento: "Halter",

            instrucao:
                "Desça o halter atrás da cabeça de forma controlada e depois estenda os braços.",

            observacao:
                "Mantenha os cotovelos relativamente estáveis."
        }

    ]

};


/* =========================================================
   TREINO B
   PERNAS & GLÚTEOS
========================================================= */

const treinoB = {

    id: "treino-b",

    letra: "B",

    nome: "Pernas & Glúteos",

    descricao:
        "Treino focado em força, estabilidade e desenvolvimento de pernas e glúteos.",

    exercicios: [

        {
            id: "agachamento-smith",

            nome: "Agachamento no Smith",

            categoria: "Pernas",

            series: 3,

            repeticoes: "8–10",

            descanso: 210,

            cargaSugerida: 25,

            equipamento: "Smith",

            instrucao:
                "Mantenha os pés firmes, desça com controle e suba mantendo o tronco estável.",

            observacao:
                "Priorize amplitude segura e controle."
        },


        {
            id: "leg-press",

            nome: "Leg press 45°",

            categoria: "Pernas",

            series: 3,

            repeticoes: "10–12",

            descanso: 180,

            cargaSugerida: 50,

            equipamento: "Leg press",

            instrucao:
                "Posicione os pés de forma confortável na plataforma, desça controladamente e empurre sem travar completamente os joelhos.",

            observacao:
                "Mantenha os quadris apoiados no banco."
        },


        {
            id: "stiff-barra",

            nome: "Stiff com barra",

            categoria: "Posterior",

            series: 3,

            repeticoes: "8–10",

            descanso: 180,

            cargaSugerida: 25,

            equipamento: "Barra",

            instrucao:
                "Leve o quadril para trás mantendo a coluna neutra e desça a barra próxima às pernas.",

            observacao:
                "Concentre-se no alongamento dos posteriores."
        },


        {
            id: "cadeira-extensora",

            nome: "Cadeira extensora",

            categoria: "Quadríceps",

            series: 2,

            repeticoes: "10–12",

            descanso: 150,

            cargaSugerida: 20,

            equipamento: "Máquina",

            instrucao:
                "Estenda os joelhos de forma controlada e retorne lentamente à posição inicial.",

            observacao:
                "Evite movimentos bruscos."
        },


        {
            id: "mesa-flexora",

            nome: "Mesa flexora",

            categoria: "Posterior",

            series: 2,

            repeticoes: "10–12",

            descanso: 150,

            cargaSugerida: 20,

            equipamento: "Máquina",

            instrucao:
                "Flexione os joelhos puxando o apoio para baixo e retorne lentamente.",

            observacao:
                "Controle principalmente a fase de retorno."
        },


        {
            id: "cadeira-abdutora-b",

            nome: "Cadeira abdutora",

            categoria: "Glúteos",

            series: 3,

            repeticoes: "10–15",

            descanso: 150,

            cargaSugerida: 30,

            equipamento: "Máquina",

            instrucao:
                "Afaste as pernas contra a resistência e retorne lentamente.",

            observacao:
                "Evite deixar a carga voltar de forma brusca."
        },


        {
            id: "panturrilha-em-pe",

            nome: "Panturrilha em pé",

            categoria: "Panturrilhas",

            series: 3,

            repeticoes: "10–15",

            descanso: 150,

            cargaSugerida: 15,

            equipamento: "Máquina",

            instrucao:
                "Suba até a ponta dos pés e desça controladamente buscando boa amplitude.",

            observacao:
                "Faça uma pausa breve no topo do movimento."
        },


        {
            id: "abdominal-b",

            nome: "Abdominal",

            categoria: "Abdômen",

            series: 2,

            repeticoes: "12–15",

            descanso: 120,

            cargaSugerida: 0,

            equipamento: "Peso corporal",

            instrucao:
                "Realize o movimento de forma controlada, concentrando a contração no abdômen.",

            observacao:
                "Evite puxar o pescoço com as mãos."
        },


        {
            id: "vacuum",

            nome: "Vacuum",

            categoria: "Abdômen",

            series: 3,

            repeticoes: "15–20s",

            descanso: 60,

            cargaSugerida: 0,

            equipamento: "Peso corporal",

            instrucao:
                "Expire o ar e contraia o abdômen para dentro, mantendo a posição pelo tempo planejado.",

            observacao:
                "Faça de forma confortável e sem prender a respiração por tempo excessivo."
        }

    ]

};


/* =========================================================
   TREINO C
   COSTAS, BÍCEPS & GLÚTEOS
========================================================= */

const treinoC = {

    id: "treino-c",

    letra: "C",

    nome: "Costas, Bíceps & Glúteos",

    descricao:
        "Um treino equilibrado para costas, braços e glúteos, com foco em controle e evolução.",

    exercicios: [

        {
            id: "pulley-frente",

            nome: "Pulley frente",

            categoria: "Costas",

            series: 3,

            repeticoes: "8–12",

            descanso: 180,

            cargaSugerida: 22,

            equipamento: "Polia",

            instrucao:
                "Puxe a barra em direção à parte superior do peito mantendo o tronco estável.",

            observacao:
                "Concentre-se em utilizar as costas em vez de puxar apenas com os braços."
        },


        {
            id: "remada-baixa",

            nome: "Remada baixa",

            categoria: "Costas",

            series: 3,

            repeticoes: "8–12",

            descanso: 180,

            cargaSugerida: 22,

            equipamento: "Polia",

            instrucao:
                "Puxe o cabo em direção ao tronco mantendo o peito aberto e controlando a volta.",

            observacao:
                "Evite arredondar excessivamente a lombar."
        },


        {
            id: "remada-articulada",

            nome: "Remada articulada",

            categoria: "Costas",

            series: 2,

            repeticoes: "10–12",

            descanso: 180,

            cargaSugerida: 20,

            equipamento: "Máquina",

            instrucao:
                "Puxe os braços para trás mantendo o movimento controlado e retornando lentamente.",

            observacao:
                "Priorize amplitude e contração das costas."
        },


        {
            id: "hip-thrust",

            nome: "Hip thrust na máquina",

            categoria: "Glúteos",

            series: 3,

            repeticoes: "8–12",

            descanso: 180,

            cargaSugerida: 30,

            equipamento: "Máquina",

            instrucao:
                "Empurre o quadril para cima contra a resistência e contraia os glúteos no topo.",

            observacao:
                "Evite hiperestender a lombar."
        },


        {
            id: "cadeira-abdutora-c",

            nome: "Cadeira abdutora",

            categoria: "Glúteos",

            series: 2,

            repeticoes: "12–15",

            descanso: 150,

            cargaSugerida: 30,

            equipamento: "Máquina",

            instrucao:
                "Afaste as pernas de forma controlada e retorne lentamente.",

            observacao:
                "Mantenha tensão durante todo o movimento."
        },


        {
            id: "rosca-direta",

            nome: "Rosca direta com barra",

            categoria: "Bíceps",

            series: 3,

            repeticoes: "8–10",

            descanso: 180,

            cargaSugerida: 10,

            equipamento: "Barra",

            instrucao:
                "Flexione os cotovelos levando a barra para cima sem balançar o tronco.",

            observacao:
                "Mantenha os cotovelos próximos ao corpo."
        },


        {
            id: "rosca-martelo",

            nome: "Rosca martelo",

            categoria: "Bíceps",

            series: 2,

            repeticoes: "10–12",

            descanso: 150,

            cargaSugerida: 6,

            equipamento: "Halteres",

            instrucao:
                "Mantenha as mãos em posição neutra e flexione os cotovelos de forma controlada.",

            observacao:
                "Evite usar impulso do corpo."
        },


        {
            id: "abdominal-c",

            nome: "Abdominal",

            categoria: "Abdômen",

            series: 2,

            repeticoes: "12–15",

            descanso: 120,

            cargaSugerida: 0,

            equipamento: "Peso corporal",

            instrucao:
                "Execute o movimento de forma lenta e controlada, concentrando a contração no abdômen.",

            observacao:
                "Mantenha o pescoço relaxado."
        }

    ]

};


/* =========================================================
   LISTA PRINCIPAL DE TREINOS
========================================================= */

const treinos = [

    treinoA,
    treinoB,
    treinoC

];


/* =========================================================
   ENCONTRAR TREINO PELO ID
========================================================= */

function encontrarTreino(id) {

    return treinos.find(
        (treino) =>
            treino.id === id
    );

}


/* =========================================================
   ENCONTRAR EXERCÍCIO PELO ID
========================================================= */

function encontrarExercicio(id) {

    for (
        const treino of treinos
    ) {

        const exercicio =
            treino.exercicios.find(
                (item) =>
                    item.id === id
            );


        if (exercicio) {

            return exercicio;

        }

    }


    return null;

}


/* =========================================================
   ENCONTRAR O TREINO DE UM EXERCÍCIO
========================================================= */

function encontrarTreinoDoExercicio(
    exercicioId
) {

    for (
        const treino of treinos
    ) {

        const encontrado =
            treino.exercicios.some(
                (exercicio) =>
                    exercicio.id === exercicioId
            );


        if (encontrado) {

            return treino;

        }

    }


    return null;

}


/* =========================================================
   FORMATAR TEMPO
========================================================= */

function formatarTempo(segundos) {

    const total =
        Number(segundos) || 0;


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
   CALCULAR TOTAL DE SÉRIES
========================================================= */

function totalDeSeries(treino) {

    if (
        !treino ||
        !Array.isArray(
            treino.exercicios
        )
    ) {

        return 0;

    }


    return treino.exercicios.reduce(
        (
            total,
            exercicio
        ) => {

            return (
                total +
                (Number(exercicio.series) || 0)
            );

        },
        0
    );

}


/* =========================================================
   CALCULAR TOTAL DE EXERCÍCIOS
========================================================= */

function totalDeExercicios(treino) {

    if (
        !treino ||
        !Array.isArray(
            treino.exercicios
        )
    ) {

        return 0;

    }


    return treino.exercicios.length;

}


/* =========================================================
   CALCULAR TEMPO ESTIMADO
========================================================= */

function tempoEstimadoTreino(treino) {

    if (!treino) {

        return 0;

    }


    let tempo = 0;


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


            tempo +=
                series *
                descanso;

        }
    );


    return tempo;

}


/* =========================================================
   DEBUG
========================================================= */

console.log(
    "Coelhinha Fitness - treinos.js carregado."
);

console.log(
    `${treinos.length} treinos carregados.`
);