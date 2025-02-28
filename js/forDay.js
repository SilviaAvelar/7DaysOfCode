/* Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar. Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas. No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial. Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. */

const numeroCorreto = 7; // Número fixo
let tentativas = 3;

while (tentativas > 0) {
    let chute = parseInt(prompt(`Você tem ${tentativas} tentativa(s). Adivinhe um número entre 0 e 10:`));

    if (chute === numeroCorreto) {
        alert("Parabéns! Você acertou!");
        break;
    } else {
        tentativas--;
        if (tentativas === 0) {
            alert(`Que pena! O número correto era ${numeroCorreto}.`);
        } else {
            alert("Errou! Tente novamente.");
        }
    }
}


const numeroSecreto = Math.floor(Math.random() * 11); // Número aleatório entre 0 e 10
let chances = 3;

while (tentativas > 0) {
    let chute = parseInt(prompt(`Você tem ${tentativas} tentativa(s). Adivinhe um número entre 0 e 10:`));

    if (chute === numeroSecreto) {
        alert("Parabéns! Você acertou!");
        break;
    } else {
        tentativas--;
        if (tentativas === 0) {
            alert(`Que pena! O número correto era ${numeroSecreto}.`);
        } else {
            alert("Errou! Tente novamente.");
        }
    }
}


