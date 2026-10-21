
const perguntas = [
    { q: "8 + 5 = ?", a: "13" },
    { q: "14 - 6 = ?", a: "8" },
    { q: "7 × 4 = ?", a: "28" },
    { q: "36 ÷ 6 = ?", a: "6" },
    { q: "15 + 27 = ?", a: "42" },
    { q: "50 - 18 = ?", a: "32" },
    { q: "9 × 8 = ?", a: "72" },
    { q: "81 ÷ 9 = ?", a: "9" },
    { q: "125 + 75 = ?", a: "200" },
    { q: "100 - 47 = ?", a: "53" },
    { q: "12 × 12 = ?", a: "144" },
    { q: "144 ÷ 12 = ?", a: "12" }
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
