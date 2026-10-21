
const perguntas = [
    { q: "O que é uma fração?", a: "É a representação matemática de uma ou mais partes de um todo que foi dividido em pedaços iguais" },
    { q: "Quais são os componentes de uma fração?", a: "Numerador e denominador" },
    { q: "Na fração 3/5, qual é o numerador?", a: "3" },
    { q: "Na fração 4/7, qual é o denominador?", a: "7" },
    { q: "Quanto é 1/2 + 1/2?", a: "1 inteiro" },
    { q: "Quanto é 1/4 + 2/4?", a: "3/4" },
    { q: "Quanto é 3/5 - 1/5?", a: "2/5" },
    { q: "Quanto é 1/2 de 10?", a: "5" },
    { q: "Qual fração é equivalente a 1/2 com denominador 8?", a: "4/8" },
    { q: "Como se calcula a multiplicação de duas frações?", a: "Multiplicando os numeradores entre si e os denominadores entre si" },
    { q: "Quanto é 1/2 x 1/3?", a: "1/6" },
    { q: "Como se calcula a divisão de duas frações?", a: "Multiplicando a primeira pelo inverso da segunda" },
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
        } else if (indice === 9) {
            resposta.style.fontSize = "40px";
        } else if (indice === 11) {
            resposta.style.fontSize = "40px";
        } else {
            resposta.style.fontSize = "";
        }

        if (indice === 11) {
            pergunta.style.fontSize = "40px";
        } else if (indice === 8) {
            pergunta.style.fontSize = "40px";
        } else if (indice === 1) {
            pergunta.style.fontSize = "40px"
        } else if (indice === 9) {
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
