
const perguntas = [
    { q: "Qual é a fórmula para calcular a área de um quadrado?", a: "Lado × Lado" },
    { q: "Um quadrado possui lados de 5 cm. Qual é sua área?", a: "25 cm²" },
    { q: "Qual é a fórmula para calcular o perímetro de um retângulo?", a: "2 × (Base + Altura)" },
    { q: "Um retângulo tem 8 cm de comprimento e 3 cm de largura. Qual é sua área?", a: "24 cm²" },
    { q: "Quantos graus possui a soma dos ângulos internos de um triângulo?", a: "180°" },
    { q: "Um triângulo possui base de 10 cm e altura de 6 cm. Qual é sua área?", a: "30 cm²" },
    { q: "Quantos lados possui um hexágono?", a: "6 lados" },
    { q: "Qual é o nome de um polígono que possui oito lados?", a: "Octógono" },
    { q: "Um círculo possui raio de 4 cm. Qual é o seu diâmetro?", a: "8 cm" },
    { q: "Qual é a fórmula para calcular a área de um círculo?", a: "A = πr²" },
    { q: "Um cubo possui quantas faces?", a: "6 faces" },
    { q: "Um retângulo tem base de 12 cm e altura de 4 cm. Qual é seu perímetro?", a: "32 cm" }
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

        
        if (indice === 0,1,2 || indice === pergunta.length - 1) {
            pergunta.style.fontSize = "40px";
        } else if (indice === 2) {
            resposta.style.fontSize = "40px";
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
