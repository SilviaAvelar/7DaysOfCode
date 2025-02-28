/* Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher: 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End. 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java. 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha. 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida. O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação. Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado. resolva com javscrip */

let area = prompt('Você quer seguir para a área de Front-End ou para a área de Back-End?');

if (area.toLowerCase() === "front") {
    let tecnologia = prompt("Você quer aprender React ou Vue? Digite 'React' ou 'Vue'");
    alert(`Ótima escolha! Aprender ${tecnologia} vai te ajudar muito no Front-End.`);
} else if (area.toLowerCase() === "back") {
    let tecnologia = prompt("Você quer aprender C# ou Java? Digite 'C#' ou 'Java'");
    alert(`Boa escolha! Aprender ${tecnologia} vai te tornar um ótimo desenvolvedor Back-End.`);
} else {
    alert("Opção inválida. Reinicie o jogo e escolha corretamente.");
}

let caminho = prompt('Você quer seguir se especializando na área escolhida ou quer se tornar Fullstack? Digite "Especializar" ou "Fullstack".');

if (caminho.toLowerCase() === 'especializar') {
    alert(`Ótimo! Se especializar pode te tornar um expert e referência na área!`);
} else if (caminho.toLowerCase() === 'fullstack') {
    alert(`Excelente! Ser Fullstack permite que você trabalhe em diversas áreas e tenha mais oportunidades.`);
} else {
    alert('Opção inválida! Mas siga em frente com sua jornada!');
}

let tecnologias = [];
let maisTecnologias = true;

while (maisTecnologias) {
    let novaTech = prompt("Qual tecnologia você gostaria de aprender?");
    tecnologias.push(novaTech);
    maisTecnologias = confirm("Tem mais alguma tecnologia que você gostaria de aprender? Clique em 'OK' para continuar ou 'Cancelar' para sair.");
}

alert(`Você escolheu aprender as seguintes tecnologias: ${tecnologias.join(', ')}. Boa sorte na sua jornada de aprendizado!`)