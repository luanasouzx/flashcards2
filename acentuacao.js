const perguntas = [
    { q: "O que é acentuação gráfica?", a: "É o uso de acentos gráficos para indicar a pronúncia correta de determinadas palavras." },
    { q: "Quais são os principais acentos gráficos da língua portuguesa?", a: "Acento agudo (´), acento circunflexo (^) e acento grave (`)." },
    { q: "Qual é o acento usado na palavra café?", a: "Acento agudo." },
    { q: "Qual é o acento usado na palavra você?", a: "Acento circunflexo." },
    { q: "Qual é a forma correta: lapis ou lápis?", a: "Lápis." },
    { q: "Qual é a forma correta: onibus ou ônibus?", a: "Ônibus." },
    { q: "Qual é a forma correta: tambem ou também?", a: "Também." },
    { q: "Qual é a forma correta: facil ou fácil?", a: "Fácil." },
    { q: "Qual é a forma correta: coracao ou coração?", a: "Coração." },
    { q: "Por que a palavra saúde tem acento?", a: "Porque o u é tônico e forma uma sílaba separada do a, seguindo a regra do hiato." },
    { q: "Qual é a forma correta: heroi ou herói?", a: "Herói." },
    { q: "Qual é a forma correta: saida ou saída?", a: "Saída." }
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
