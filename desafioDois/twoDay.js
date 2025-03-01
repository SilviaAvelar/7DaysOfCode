/* Desenvolver um programa que deve pedir para o usuário responder 3 perguntas: - Qual o seu nome? - Quantos anos você tem? - Qual linguagem de programação você está estudando? À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas. No final, o sistema vai exibir a  mensagem: "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!" */

/* Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte: Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO. E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens: 1 > Muito bom! Continue estudando e você terá muito sucesso. 2 > Ahh que pena... Já tentou aprender outras linguagens? */

// Parte 1: Questionário Inicial
const cardInicial = document.getElementById('cardInicial');
const perguntaInicial = document.getElementById('perguntaInicial');
const respostaInicial = document.getElementById('respostaInicial');
const btnProximoInicial = document.getElementById('btnProximoInicial');
const mensagemInicial = document.getElementById('mensagemInicial');
const cardSegundaParte = document.getElementById('cardSegundaParte');

let perguntasIniciais = [
    "Qual o seu nome?",
    "Quantos anos você tem?",
    "Qual linguagem de programação você está estudando?"
];

let respostasIniciais = [];
let perguntaInicialIndex = 0;

function exibirPerguntaInicial() {
    perguntaInicial.innerHTML = `<b>${perguntasIniciais[perguntaInicialIndex]}</b>`;
    respostaInicial.value = "";
}

function exibirMensagemInicial() {
    cardInicial.style.display = "none";
    const nome = respostasIniciais[0];
    const idade = respostasIniciais[1];
    const linguagem = respostasIniciais[2];
    mensagemInicial.textContent = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
    mensagemInicial.style.display = "block";
    cardSegundaParte.style.display = "block";
    cardSegundaParte.querySelector("h2").innerHTML = `<b>Você Gosta de Estudar ${linguagem}?</b>`;
}

function resetarQuestionario() {
    cardInicial.style.display = "block";
    cardSegundaParte.style.display = "none";
    mensagemInicial.style.display = "none";

    respostasIniciais = [];
    perguntaInicialIndex = 0;

    exibirPerguntaInicial();

    // Limpa a resposta do segundo card
    respostaGosta.value = "";
    mensagemGosta.style.display = "none";
}

btnProximoInicial.addEventListener('click', function () {
    const resposta = respostaInicial.value.trim();

    if (resposta === "") {
        alert("Por favor, responda a pergunta antes de prosseguir.");
        return;
    }

    respostasIniciais.push(resposta);
    perguntaInicialIndex++;

    if (perguntaInicialIndex < perguntasIniciais.length) {
        exibirPerguntaInicial();
    } else {
        exibirMensagemInicial();
    }
});

exibirPerguntaInicial();

// Parte 2: Você Gosta de Estudar [Linguagem]?
const respostaGosta = document.getElementById('respostaGosta');
const btnRespostaGosta = document.getElementById('btnRespostaGosta');
const mensagemGosta = document.getElementById('mensagemGosta');

btnRespostaGosta.addEventListener('click', function () {
    const resposta = respostaGosta.value.trim();

    if (resposta !== "1" && resposta !== "2") {
        alert("Por favor, responda com 1 para SIM ou 2 para NÃO.");
        return;
    }

    let mensagem = "";
    if (resposta === "1") {
        mensagem = "Muito bom! Continue estudando e você terá muito sucesso.";
    } else {
        mensagem = "Ahh que pena... Já tentou aprender outras linguagens?";
    }

    mensagemGosta.textContent = mensagem;
    mensagemGosta.style.display = "block";

    // Esperar um pouco antes de resetar o questionário
    setTimeout(() => {
        resetarQuestionario();
    }, 5000); // Espera 5 segundos (5000 milissegundos)
});