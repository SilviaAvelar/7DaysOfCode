/* Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar. Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas. No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial. Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. */

const mensagemInicial = document.getElementById("mensagemInicial");
const chuteInput = document.getElementById("chute");
const btnChutar = document.getElementById("btnChutar");
const mensagem = document.getElementById("mensagem");
const tentativasRestantes = document.getElementById("tentativasRestantes");
const btnNovoJogo = document.getElementById("btnNovoJogo");

let numeroSecreto;
let tentativas;
let modoAleatorio = false; // Controla se o jogo está em modo aleatório ou não

function iniciarJogo(modo) {
    modoAleatorio = modo === "aleatorio"; // Define o modo com base no argumento
    numeroSecreto = modoAleatorio ? Math.floor(Math.random() * 11) : 7;
    tentativas = 3;

    mensagemInicial.innerHTML = "<b>Adivinhe um número entre 0 e 10!</b>"; // Pergunta em negrito
    chuteInput.disabled = false;
    btnChutar.disabled = false;
    mensagem.textContent = "";
    chuteInput.value = "";
    tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
}

btnChutar.addEventListener("click", () => {
    const chute = parseInt(chuteInput.value);

    if (isNaN(chute) || chute < 0 || chute > 10) {
        mensagem.innerHTML = "<b>Por favor, insira um número válido entre 0 e 10.</b>"; // Mensagem em negrito
        return;
    }

    if (chute === numeroSecreto) {
        mensagem.innerHTML = "<b>Parabéns! Você acertou!</b>"; // Mensagem em negrito
        chuteInput.disabled = true;
        btnChutar.disabled = true;
        tentativasRestantes.textContent = "";
    } else {
        tentativas--;
        tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
        mensagem.innerHTML = "<b>Errou! Tente novamente.</b>"; // Mensagem em negrito

        if (tentativas === 0) {
            mensagem.innerHTML = `<b>Que pena! O número correto era ${numeroSecreto}.</b>`; // Mensagem em negrito
            chuteInput.disabled = true;
            btnChutar.disabled = true;
        }
    }

    chuteInput.value = "";
});

btnNovoJogo.addEventListener("click", () => {
    if (confirm("Deseja jogar com um número aleatório?")) {
        iniciarJogo("aleatorio");
    } else {
        iniciarJogo("fixo");
    }
});

// Iniciar o jogo com o número fixo
iniciarJogo("fixo");