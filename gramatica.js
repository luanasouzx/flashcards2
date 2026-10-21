
const perguntas = [
    { q: "Quando ocorre a crase?", a: "A crase ocorre quando há a fusão da preposição A com o artigo feminino A." },
    { q: " Qual a diferença entre 'por que' (separado) e 'porque' (junto)?", a: "Por que separado é usado para perguntas. Porque junto é usado para respostas e explicações." },
    { q: "Qual a diferença entre 'mas' e 'mais'? ", a: "Mas indica oposição/ideia contrária (equivale a porem). Mais indica intensidade ou quantidade (o oposto de menos)." },
    { q: "Quando usar 'mal' com L e 'mau' com U?", a: "Mal com L é o oposto de bem. Mau com U é o oposto de bom." },
    { q: "O que é um sujeito oculto (ou elíptico)?", a: "É o sujeito que não está explícito na frase, mas pode ser identificado pela terminação do verbo." },
    { q: "O que é o agente da passiva?", a: " É o termo que pratica a ação quando a frase está na voz passiva." },
    { q: " Qual a diferença entre objeto direto e objeto indireto?", a: "O objeto direto se liga ao verbo sem preposição. O objeto indireto exige uma preposição." },
    { q: "O que é uma palavra paroxítona?", a: "É aquela em que a penúltima sílaba é a mais forte (tônica)." },
    { q: " O verbo 1assistir' no sentido de ver TV ou filme exige preposição?", a: "Sim. No sentido de ver/presenciar, ele exige a preposição A." },
    { q: "A palavra 'anexo' varia ou fica invariável?", a: "Ela varia para concordar com o substantivo. Já a expressão 'em anexo' nunca muda." },
    { q: "O que é um adjunto adnominal?", a: "É o termo que acompanha, modifica ou caracteriza um substantivo diretamente." },
    { q: " Quando se deve usar 'aonde'?", a: "Aonde deve ser usado apenas com verbos que indicam movimento e que exigem a preposição A." }
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
