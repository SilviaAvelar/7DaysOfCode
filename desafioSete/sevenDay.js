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
    if (b === 0) {
        return "Erro! Divisão por zero.";
    }
    return Math.round(a / b);
}

function calcular() {
    const operacao = document.getElementById("operationChoice").value;
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = soma(valor1, valor2);
            break;
        case "subtracao":
            resultado = subtracao(valor1, valor2);
            break;
        case "multiplicacao":
            resultado = multiplicacao(valor1, valor2);
            break;
        case "divisao":
            resultado = divisao(valor1, valor2);
            break;
        default:
            resultado = "Operação inválida.";
    }

    document.getElementById("result").textContent = "Resultado: " + resultado;
}