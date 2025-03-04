/* Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar. Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas. No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial. Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. */

// Seleciona os elementos do DOM
const mensagemInicial = document.getElementById("mensagemInicial");
const chuteInput = document.getElementById("chute");
const btnChutar = document.getElementById("btnChutar");
const mensagem = document.getElementById("mensagem");
const tentativasRestantes = document.getElementById("tentativasRestantes");
const btnNovoJogo = document.getElementById("btnNovoJogo");

let numeroSecreto;
let tentativas;

// Função para iniciar o jogo
function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 11); // Gera número aleatório entre 0 e 10
    tentativas = 3;

    // Configuração inicial da interface
    mensagemInicial.innerHTML = "<b>Adivinhe um número entre 0 e 10!</b>";
    chuteInput.disabled = false;
    btnChutar.disabled = false;
    chuteInput.value = "";
    mensagem.textContent = "";
    tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
}

// Função para verificar o chute do jogador
function verificarChute() {
    const chute = parseInt(chuteInput.value);

    if (isNaN(chute) || chute < 0 || chute > 10) {
        exibirMensagem("Por favor, insira um número válido entre 0 e 10.", "mensagem-erro");
        return;
    }

    if (chute === numeroSecreto) {
        exibirMensagem("Parabéns! Você acertou!", "mensagem-sucesso");
        finalizarJogo();
    } else {
        tentativas--;
        if (tentativas > 0) {
            exibirMensagem("Errou! Tente novamente.", "mensagem-erro");
            tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
        } else {
            exibirMensagem(`Que pena! O número correto era ${numeroSecreto}.`, "mensagem-erro");
            finalizarJogo();
        }
    }

    chuteInput.value = "";
}

// Função para exibir mensagens coloridas
function exibirMensagem(texto, classe) {
    mensagem.textContent = texto;
    mensagem.className = classe;
}

// Função para finalizar o jogo
function finalizarJogo() {
    chuteInput.disabled = true;
    btnChutar.disabled = true;
    tentativasRestantes.textContent = "";
}

// Eventos de clique nos botões
btnChutar.addEventListener("click", verificarChute);
btnNovoJogo.addEventListener("click", iniciarJogo);

// Inicia o jogo ao carregar a página
iniciarJogo();
