
const perguntas = [
    { q: "O que é uma equação?", a: "É uma igualdade matemática que contém valores desconhecidos, representados por letras" },
    { q: "Resolva: x + 5 = 12", a: "x = 7" },
    { q: "Resolva: x - 8 = 10", a: "x = 18" },
    { q: "Resolva: 2x = 16", a: " x = 8" },
    { q: "Resolva: 3x + 4 = 19", a: "x = 5" },
    { q: "Resolva: 5x = 35", a: "x = 7" },
    { q: "Resolva: x + 12 = 20", a: "x = 8" },
    { q: "Resolva: 4x - 6 = 14", a: "x = 5" },
    { q: "Resolva: 2x + 10 = 24", a: "x = 7" },
    { q: "Resolva: 3x - 9 = 12", a: "x = 7" },
    { q: "Resolva: 2x + 5 = 3x + 1", a: "x = 4" },
    { q: "O dobro de um número mais 6 é igual a 20. Qual é esse número?", a: "7" }
];



const areaCarta = document.getElementById("areaCarta");
const carta = document.getElementById("carta");

const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const contador = document.getElementById("contador");

const barra = document.getElementById("barra");
const progresso = document.getElementById("progresso");

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

        if (indice === 0 || indice === resposta.length - 1) {
            resposta.style.fontSize = "40px";
        } else {
            resposta.style.fontSize = "";
        }

        
        if (indice === 11 || indice === pergunta.length - 1) {
            pergunta.style.fontSize = "50px";
        } else {
            pergunta.style.fontSize = "";
        }

        contador.textContent =
            `Carta ${indice + 1} de ${perguntas.length}`;

        const porcentagem =
            ((indice + 1) / perguntas.length) * 100;

        barra.style.width = `${porcentagem}%`;

        progresso.setAttribute("aria-valuemax", perguntas.length);
        progresso.setAttribute("aria-valuenow", indice + 1);

    }, 180);
}

function proxima() {

    indice = (indice + 1) % perguntas.length;

    atualizarCarta();
}

function anterior() {

    indice =
        (indice - 1 + perguntas.length) % perguntas.length;

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
