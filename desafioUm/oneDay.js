/* A sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros: */

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

const resultadoDiv = document.getElementById('resultado');
const jogarButton = document.getElementById('jogar');

jogarButton.addEventListener('click', function () {
    let mensagem = "";

    if (numeroUm == stringUm) {
        mensagem += 'As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes.<br>';
    } else {
        mensagem += 'As variáveis numeroUm e stringUm não têm o mesmo valor.<br>';
    }

    if (numeroTrinta === Number(stringTrinta)) {
        mensagem += 'As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo.<br>';
    } else {
        mensagem += 'As variáveis numeroTrinta e stringTrinta têm o mesmo valor, mas tipos diferentes.<br>';
    }

    if (numeroDez == stringDez) {
        mensagem += 'As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes.<br>';
    } else {
        mensagem += 'As variáveis numeroDez e stringDez não têm o mesmo valor.<br>';
    }

    resultadoDiv.innerHTML = mensagem;
});