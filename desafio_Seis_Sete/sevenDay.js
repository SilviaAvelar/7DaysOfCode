/* Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código. Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela. Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão. As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima". */

// Funções de operações matemáticas
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return b === 0 ? "Erro! Divisão por zero." : a / b;
}

function calcular() {
    const operacao = document.getElementById("operationChoice").value;
    const resultDiv = document.getElementById("result");

    
    if (operacao === "sair") {
        resultDiv.textContent = "Até a próxima!";
        resultDiv.style.color = "green"; 
        return;
    }

    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultDiv.textContent = "Por favor, insira números válidos.";
        resultDiv.style.color = "red"; 
        return;
    }

    const operacoes = {
        soma,
        subtracao,
        multiplicacao,
        divisao,
    };

    const resultado = operacoes[operacao] ? operacoes[operacao](valor1, valor2) : "Operação inválida.";

    resultDiv.textContent = `Resultado: ${resultado}`;
    resultDiv.style.color = "green"; 
}
