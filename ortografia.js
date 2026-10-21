const perguntas = [
    { q: "Qual é o correto: concerteza ou com certeza?", a: "Com certeza." },
    { q: "Qual é o correto: agente ou a gente?", a: "Agente é uma profissão; a gente significa nós." },
    { q: "Qual é o correto: mas ou mais?", a: "Mas indica oposição; mais indica quantidade ou intensidade." },
    { q: "Qual é o correto: por que ou porque?", a: "Por que é usado em perguntas; porque, geralmente, em respostas." },
    { q: "Qual é o correto: exceção ou excessão?", a: "Exceção." },
    { q: "Qual é o correto: enchergar ou enxergar?", a: "Enxergar." },
    { q: "Qual é o correto: privilégio ou previlégio?", a: "Privilégio." },
    { q: "Qual é o correto: viagem ou viajem?", a: "Viagem é substantivo; viajem é uma forma do verbo viajar." },
    { q: "Qual é o correto: atrás ou atraz?", a: "Atrás." },
    { q: "Qual é o correto: mal ou mau?", a: "Mal é o contrário de bem; mau é o contrário de bom." },
    { q: "Qual é o correto: empecilho ou impecilho?", a: "Empecilho." },
    { q: "Qual é o correto: pesquisar ou pesquizar?", a: "Pesquisar." }
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
