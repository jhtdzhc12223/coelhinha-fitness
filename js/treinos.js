/* =========================================
   COELHINHA FITNESS
   TREINOS.JS

   Dados dos treinos e exercícios
========================================= */

const treinos = [

    /* =====================================
       TREINO A
       PEITO • OMBROS • TRÍCEPS
    ===================================== */

    {
        id: "treino-a",
        nome: "Peito, Ombros & Tríceps",
        codigo: "TREINO A",
        descricao: "Parte superior • Empurrar",
        duracao: "40–50 min",

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
                    "Deite no banco com os pés firmes no chão. Desça os halteres de forma controlada até uma amplitude confortável e empurre para cima sem bater os pesos.",

                observacao:
                    "Priorize controle e estabilidade. A carga pode ser reduzida se a execução perder qualidade."
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
                    "Mantenha as costas apoiadas e os braços levemente flexionados. Feche os braços à frente do corpo de forma controlada e retorne devagar.",

                observacao:
                    "Evite usar impulso. Concentre-se no movimento do peito."
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
                    "Com os braços levemente flexionados, eleve os halteres para os lados até aproximadamente a altura dos ombros e desça lentamente.",

                observacao:
                    "Não balance o corpo para levantar o peso."
            },


            {
                id: "desenvolvimento-maquina",
                nome: "Desenvolvimento de ombros",
                categoria: "Ombros",
                series: 3,
                repeticoes: "8–10",
                descanso: 180,
                cargaSugerida: 20,
                equipamento: "Máquina",

                instrucao:
                    "Sente-se com as costas apoiadas. Empurre as alças para cima de maneira controlada e retorne sem deixar o peso despencar.",

                observacao:
                    "Ajuste o banco para que as mãos fiquem em uma posição confortável."
            },


            {
                id: "triceps-corda",
                nome: "Tríceps na polia com corda",
                categoria: "Tríceps",
                series: 3,
                repeticoes: "10–12",
                descanso: 150,
                cargaSugerida: 12,
                equipamento: "Polia + corda",

                instrucao:
                    "Mantenha os cotovelos próximos ao corpo. Empurre a corda para baixo até estender os braços e retorne controladamente.",

                observacao:
                    "Os cotovelos devem permanecer relativamente estáveis durante o movimento."
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
                    "Segure o halter acima da cabeça. Flexione os cotovelos levando o peso para trás e depois estenda os braços novamente.",

                observacao:
                    "Use uma amplitude confortável e mantenha os cotovelos controlados."
            }

        ]
    },


    /* =====================================
       TREINO B
       PERNAS • GLÚTEOS
    ===================================== */

    {
        id: "treino-b",
        nome: "Pernas & Glúteos",
        codigo: "TREINO B",
        descricao: "Parte inferior • Força e controle",
        duracao: "45–55 min",

        exercicios: [

            {
                id: "agachamento-smith",
                nome: "Agachamento no Smith",
                categoria: "Quadríceps • Glúteos",
                series: 3,
                repeticoes: "8–10",
                descanso: 210,
                cargaSugerida: 25,
                equipamento: "Smith",

                instrucao:
                    "Posicione os pés de forma confortável, mantenha o tronco firme e desça controladamente. Empurre o chão para retornar à posição inicial.",

                observacao:
                    "A profundidade deve ser aquela em que ela consegue manter controle e boa postura."
            },


            {
                id: "leg-press",
                nome: "Leg press 45°",
                categoria: "Quadríceps • Glúteos",
                series: 3,
                repeticoes: "10–12",
                descanso: 180,
                cargaSugerida: 50,
                equipamento: "Leg press",

                instrucao:
                    "Mantenha as costas e o quadril apoiados no banco. Desça a plataforma controladamente e empurre sem travar completamente os joelhos.",

                observacao:
                    "A amplitude deve respeitar a mobilidade e o conforto."
            },


            {
                id: "stiff",
                nome: "Stiff com barra",
                categoria: "Posterior • Glúteos",
                series: 3,
                repeticoes: "8–10",
                descanso: 180,
                cargaSugerida: 25,
                equipamento: "Barra",

                instrucao:
                    "Mantenha a coluna neutra, leve o quadril para trás e mantenha a barra próxima às pernas. Desça até sentir um bom alongamento nos posteriores.",

                observacao:
                    "Não precisa descer até o chão. Pare antes de perder a posição da coluna."
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
                    "Sente-se com as costas apoiadas e estenda os joelhos de forma controlada. Retorne lentamente.",

                observacao:
                    "Evite chutar o peso ou soltar a carga rapidamente."
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
                    "Mantenha o corpo apoiado e flexione os joelhos levando o rolo em direção às pernas. Retorne lentamente.",

                observacao:
                    "Mantenha o movimento controlado durante toda a repetição."
            },


            {
                id: "abdutora",
                nome: "Cadeira abdutora",
                categoria: "Glúteos",
                series: 3,
                repeticoes: "10–15",
                descanso: 150,
                cargaSugerida: 30,
                equipamento: "Máquina",

                instrucao:
                    "Sente-se com as costas apoiadas e afaste as pernas contra a resistência. Retorne devagar, mantendo tensão.",

                observacao:
                    "A carga da máquina varia bastante entre academias. Ajuste conforme a execução."
            },


            {
                id: "panturrilha",
                nome: "Panturrilha em pé",
                categoria: "Panturrilhas",
                series: 3,
                repeticoes: "10–15",
                descanso: 150,
                cargaSugerida: 15,
                equipamento: "Máquina",

                instrucao:
                    "Suba o máximo que conseguir com controle, contraindo as panturrilhas, e desça lentamente até sentir alongamento.",

                observacao:
                    "Evite fazer as repetições pulando."
            },


            {
                id: "abdominal",
                nome: "Abdominal",
                categoria: "Abdômen",
                series: 2,
                repeticoes: "12–15",
                descanso: 120,
                cargaSugerida: 0,
                equipamento: "Peso corporal",

                instrucao:
                    "Realize o movimento de forma controlada, contraindo o abdômen durante a subida e retornando lentamente.",

                observacao:
                    "A prioridade é controlar o movimento, não fazer o maior número possível de repetições."
            },


            {
                id: "vacuum",
                nome: "Vacuum abdominal",
                categoria: "Abdômen",
                series: 3,
                repeticoes: "15–20 s",
                descanso: 60,
                cargaSugerida: 0,
                equipamento: "Peso corporal",

                instrucao:
                    "Expire o ar e contraia o abdômen puxando suavemente a região abdominal para dentro. Mantenha a contração pelo tempo indicado.",

                observacao:
                    "Não force a respiração. Interrompa se sentir desconforto."
            }

        ]
    },


    /* =====================================
       TREINO C
       COSTAS • BÍCEPS • GLÚTEOS
    ===================================== */

    {
        id: "treino-c",
        nome: "Costas, Bíceps & Glúteos",
        codigo: "TREINO C",
        descricao: "Puxar • Costas e braços",
        duracao: "45–55 min",

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
                    "Segure a barra com uma pegada confortável. Puxe em direção à parte superior do peito mantendo o tronco estável e retorne lentamente.",

                observacao:
                    "Evite puxar a barra atrás da cabeça."
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
                    "Mantenha o tronco firme e puxe o cabo em direção ao abdômen. Junte as escápulas de maneira controlada e retorne lentamente.",

                observacao:
                    "Evite balançar o tronco para conseguir puxar a carga."
            },


            {
                id: "remada-maquina",
                nome: "Remada articulada",
                categoria: "Costas",
                series: 2,
                repeticoes: "10–12",
                descanso: 180,
                cargaSugerida: 20,
                equipamento: "Máquina",

                instrucao:
                    "Apoie o peito ou mantenha a postura indicada pela máquina. Puxe as alças em direção ao corpo e retorne controladamente.",

                observacao:
                    "Ajuste o banco e a posição das alças antes de começar."
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
                    "Apoie as costas conforme indicado pela máquina. Empurre o quadril para cima contraindo os glúteos e retorne de forma controlada.",

                observacao:
                    "Evite exagerar na extensão da lombar no topo."
            },


            {
                id: "abdutora-c",
                nome: "Cadeira abdutora",
                categoria: "Glúteos",
                series: 2,
                repeticoes: "12–15",
                descanso: 150,
                cargaSugerida: 30,
                equipamento: "Máquina",

                instrucao:
                    "Afaste as pernas contra a resistência e retorne lentamente, mantendo tensão durante todo o movimento.",

                observacao:
                    "Controle principalmente a volta."
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
                    "Mantenha os cotovelos próximos ao corpo. Flexione os braços levando a barra para cima sem balançar o tronco e desça de maneira controlada.",

                observacao:
                    "Não use o corpo para criar impulso. Se precisar balançar, reduza a carga."
            },


            {
                id: "rosca-martelo",
                nome: "Rosca martelo",
                categoria: "Bíceps • Antebraços",
                series: 2,
                repeticoes: "10–12",
                descanso: 150,
                cargaSugerida: 6,
                equipamento: "Halteres",

                instrucao:
                    "Segure os halteres com as palmas voltadas uma para a outra. Flexione os cotovelos mantendo os braços próximos ao corpo.",

                observacao:
                    "Faça a descida de forma controlada."
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
                    "Execute o movimento lentamente, contraindo o abdômen e evitando puxar o pescoço.",

                observacao:
                    "Qualidade das repetições acima da velocidade."
            }

        ]
    }

];


/* =========================================
   FUNÇÕES AUXILIARES
========================================= */

/**
 * Encontra um treino pelo ID.
 */
function encontrarTreino(id) {
    return treinos.find(treino => treino.id === id);
}


/**
 * Encontra um exercício dentro de qualquer treino.
 */
function encontrarExercicio(id) {

    for (const treino of treinos) {

        const exercicio = treino.exercicios.find(
            exercicio => exercicio.id === id
        );

        if (exercicio) {
            return exercicio;
        }
    }

    return null;
}


/**
 * Converte segundos para MM:SS.
 *
 * Exemplo:
 * 180 → "03:00"
 */
function formatarTempo(segundos) {

    const minutos = Math.floor(segundos / 60);

    const segundosRestantes = segundos % 60;

    return `${String(minutos).padStart(2, "0")}:${String(segundosRestantes).padStart(2, "0")}`;
}


/**
 * Retorna a quantidade total de séries de um treino.
 */
function totalDeSeries(treino) {

    return treino.exercicios.reduce(
        (total, exercicio) => total + exercicio.series,
        0
    );
}