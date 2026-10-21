const perguntas = [
    { q: "O que são classes gramaticais?", a: "São categorias que classificam as palavras de acordo com sua função na língua." },
    { q: "Quantas classes gramaticais existem na língua portuguesa?", a: "Dez classes gramaticais." },
    { q: "O que é um substantivo?", a: "É a palavra que dá nome a pessoas, animais, lugares, objetos e sentimentos." },
    { q: "O que é um adjetivo?", a: "É a palavra que caracteriza ou atribui uma qualidade ao substantivo." },
    { q: "O que é um verbo?", a: "É a palavra que indica ação, estado ou fenômeno da natureza." },
    { q: "O que é um pronome?", a: "É a palavra que pode substituir ou acompanhar um substantivo." },
    { q: "O que é um artigo?", a: "É a palavra que acompanha o substantivo, definindo-o ou indefinindo-o." },
    { q: "O que é um numeral?", a: "É a palavra que indica quantidade, ordem, multiplicação ou fração." },
    { q: "O que é um advérbio?", a: "É a palavra que modifica um verbo, um adjetivo ou outro advérbio, indicando circunstâncias como tempo, lugar e modo." },
    { q: "O que é uma preposição?", a: "É a palavra que liga termos, estabelecendo uma relação entre eles." },
    { q: "O que é uma conjunção?", a: "É a palavra que liga orações ou termos semelhantes." },
    { q: "O que é uma interjeição?", a: "É a palavra ou expressão que manifesta emoções, sentimentos ou reações." }
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

        if (indice === 0, 1) {
            resposta.style.fontSize = "40px";
        } else {
            resposta.style.fontSize = "";
        }


        if (indice === 0, 1) {
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
