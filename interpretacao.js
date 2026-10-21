
const perguntas = [
    {
        q: "O que é interpretação de texto?",
        a: "É compreender as informações, os sentidos e as intenções de um texto."
    },
    {
        q: "O que é o tema de um texto?",
        a: "É o assunto principal sobre o qual o texto fala."
    },
    {
        q: "O que é a ideia principal?",
        a: "É a informação mais importante que o texto procura transmitir."
    },
    {
        q: "O que é uma informação explícita?",
        a: "É uma informação apresentada diretamente no texto."
    },
    {
        q: "O que é uma informação implícita?",
        a: "É uma informação que não aparece diretamente, mas pode ser compreendida pelo contexto."
    },
    {
        q: "O que é inferência textual?",
        a: "É chegar a uma conclusão usando pistas do texto e conhecimentos prévios."
    },
    {
        q: "O que é a finalidade de um texto?",
        a: "É o objetivo do texto, como informar, convencer, divertir ou orientar."
    },
    {
        q: "O que é o público-alvo?",
        a: "É o grupo de pessoas a quem o texto se destina."
    },
    {
        q: "O que é o contexto de um texto?",
        a: "É o conjunto de circunstâncias que ajuda a compreender seu significado."
    },
    {
        q: "O que é o sentido de uma palavra no contexto?",
        a: "É o significado que a palavra assume naquela situação específica."
    },
    {
        q: "Qual é a diferença entre fato e opinião?",
        a: "Fato pode ser verificado; opinião expressa uma avaliação ou ponto de vista."
    },
    {
        q: "O que é linguagem figurada?",
        a: "É o uso de palavras com sentido não literal para criar efeitos de significado."
    },
    {
        q: "Como identificar a mensagem de um texto?",
        a: "Observe o tema, as ideias principais, as informações e a intenção do autor."
    }
];

const areaCarta = document.getElementById("areaCarta");
const carta = document.getElementById("carta");

const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const contador = document.getElementById("contador");

const barra = document.getElementById("barra");
const progresso = document.getElementById("progresso");
const porcentagem = document.getElementById("porcentagem");

const botaoAnterior = document.getElementById("botaoAnterior");
const botaoVirar = document.getElementById("botaoVirar");
const botaoProxima = document.getElementById("botaoProxima");
const botaoEmbaralhar = document.getElementById("botaoEmbaralhar");

let indice = 0;
let temporizador = null;

function virarCarta() {
    carta.classList.toggle("virada");
}

function atualizarCarta() {
    clearTimeout(temporizador);

    carta.classList.remove("virada");

    temporizador = setTimeout(() => {
        pergunta.textContent = perguntas[indice].q;
        resposta.textContent = perguntas[indice].a;

        // Fonte fixa de 40px
        pergunta.style.fontSize = "40px";
        resposta.style.fontSize = "40px";

        // Atualiza o contador
        contador.textContent =
            `Carta ${indice + 1} de ${perguntas.length}`;

        // Barra de progresso animada
        const valorProgresso =
            ((indice + 1) / perguntas.length) * 100;

        barra.style.width = `${valorProgresso}%`;

        progresso.setAttribute("aria-valuemax", perguntas.length);
        progresso.setAttribute("aria-valuenow", indice + 1);

        // Porcentagem sempre fixa em 8%
        if (porcentagem) {
            porcentagem.textContent = "⭐ 8% concluído";
        }

    }, 180);
}

function proxima() {
    indice = (indice + 1) % perguntas.length;
    atualizarCarta();
}

function anterior() {
    indice = (indice - 1 + perguntas.length) % perguntas.length;
    atualizarCarta();
}

function embaralhar() {
    for (let i = perguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [perguntas[i], perguntas[j]] =
            [perguntas[j], perguntas[i]];
    }

    indice = 0;
    atualizarCarta();
}

areaCarta.addEventListener("click", virarCarta);

areaCarta.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        virarCarta();
    }
});

botaoAnterior.addEventListener("click", anterior);
botaoVirar.addEventListener("click", virarCarta);
botaoProxima.addEventListener("click", proxima);
botaoEmbaralhar.addEventListener("click", embaralhar);

atualizarCarta();
