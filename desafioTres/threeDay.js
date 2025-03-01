/* Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher: 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End. 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java. 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha. 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida. O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação. Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado. resolva com javscrip */

const telaInicial = document.getElementById("telaInicial");
const telaArea = document.getElementById("telaArea");
const telaTecnologia = document.getElementById("telaTecnologia");
const telaCaminho = document.getElementById("telaCaminho");
const telaTecnologiasAdicionais = document.getElementById("telaTecnologiasAdicionais");
const telaFinal = document.getElementById("telaFinal");

const btnComecar = document.getElementById("btnComecar");
const inputTecnologia = document.getElementById("inputTecnologia");
const btnAdicionarTecnologia = document.getElementById("btnAdicionarTecnologia");
const btnFinalizarTecnologias = document.getElementById("btnFinalizarTecnologias");
const listaTecnologias = document.getElementById("listaTecnologias");
const mensagemFinal = document.getElementById("mensagemFinal");

let areaEscolhida = "";
let tecnologiaEscolhida = "";
let caminhoEscolhido = "";
let tecnologiasAdicionais = [];

btnComecar.addEventListener("click", () => {
    telaInicial.style.display = "none";
    telaArea.style.display = "block";
});

// Area
telaArea.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        areaEscolhida = event.target.dataset.area;
        telaArea.style.display = "none";
        exibirTelaTecnologia(areaEscolhida);
    }
});

function exibirTelaTecnologia(area) {
    telaTecnologia.innerHTML = "<h2>Qual tecnologia você quer aprender?</h2>";
    if (area === "Front-End") {
        telaTecnologia.innerHTML +=
            '<button data-tecnologia="React">React</button>' +
            '<button data-tecnologia="Vue">Vue</button>';
    } else {
        telaTecnologia.innerHTML +=
            '<button data-tecnologia="C#">C#</button>' +
            '<button data-tecnologia="Java">Java</button>';
    }
    telaTecnologia.style.display = "block";

    telaTecnologia.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            tecnologiaEscolhida = event.target.dataset.tecnologia;
            telaTecnologia.style.display = "none";
            telaCaminho.style.display = "block";
        }
    });
}

// Caminho
telaCaminho.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        caminhoEscolhido = event.target.dataset.caminho;
        telaCaminho.style.display = "none";
        telaTecnologiasAdicionais.style.display = "block";
    }
});

// Tecnologias Adicionais
btnAdicionarTecnologia.addEventListener("click", () => {
    const tecnologia = inputTecnologia.value.trim();
    if (tecnologia !== "") {
        tecnologiasAdicionais.push(tecnologia);
        const li = document.createElement("li");
        li.textContent = tecnologia;
        listaTecnologias.appendChild(li);
        inputTecnologia.value = ""; // Limpa o campo
    }
});

btnFinalizarTecnologias.addEventListener("click", () => {
    telaTecnologiasAdicionais.style.display = "none";
    telaFinal.style.display = "block";
    exibirMensagemFinal();
});

// Exibir Mensagem Final
function exibirMensagemFinal() {
    let mensagem = `Você escolheu seguir para a área de ${areaEscolhida} e aprender ${tecnologiaEscolhida}. Seu caminho será de ${caminhoEscolhido}!`;
    mensagemFinal.textContent = mensagem;
    if (tecnologiasAdicionais.length > 0) {
        mensagemFinal.textContent += ` Você também quer aprender: ${tecnologiasAdicionais.join(", ")}`;
    }
}