
const perguntas = [
    { q: "O que é porcentagem?", a: "é uma medida de razão com base 100, que indica uma proporção ou uma relação entre uma parte e o seu valor total" },
    { q: "Quanto é 10% de 100?", a: "10" },
    { q: "Quanto é 50% de 80? ", a: "40" },
    { q: "Quanto é 25% de 200?", a: "50" },
    { q: "Quanto é 20% de 150?", a: "30" },
    { q: "Quanto é 10% de 250?", a: "25" },
    { q: "Quanto é 75% de 100?", a: "75" },
    { q: "Quanto é 30% de 200?", a: "60" },
    { q: "Quanto é 5% de 400?", a: "20" },
    { q: "Quanto é 15% de 200?", a: "30" },
    { q: "Quanto é 40% de 90?", a: "36" },
    { q: "Um produto custa R$ 100 e tem 20% de desconto. Qual é o preço final?", a: "80" }
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

        if (indice === 0) {
            resposta.style.fontSize = "40px";
        } else {
            resposta.style.fontSize = "";
        }

        if (indice === 11) {
            pergunta.style.fontSize = "40px";
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
