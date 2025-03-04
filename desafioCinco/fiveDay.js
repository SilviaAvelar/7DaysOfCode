/* Para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não. Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata. Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.
Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma: Caso você adicione na sua lista: banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca. O programa deverá imprimir, por exemplo: Lista de compras: Frutas: banana, tomate, maçã, uva, abacate Laticínios: leite vegetal, leite de vaca, leite em pó Congelados: Doces: chiclete e bala de ursinho */
/* Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?  
A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.
Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
Por fim, ele voltará para o ciclo inicial de perguntas.
Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.
Por exemplo: “Não foi possível encontrar o item dentro da lista!”
Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras. */

const telaInicial = document.getElementById("telaInicial");
const telaAdicionarItem = document.getElementById("telaAdicionarItem");
const telaMostrarLista = document.getElementById("telaMostrarLista");

const btnComecar = document.getElementById("btnComecar");
const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");
const btnRemover = document.getElementById("btnRemover");

const divFormulario = document.getElementById("divFormulario");
const itemNomeInput = document.getElementById("itemNome");
const itemCategoriaSelect = document.getElementById("itemCategoria");
const btnAdicionar = document.getElementById("btnAdicionar");
const mensagemErro = document.getElementById("mensagemErro");

const listaComprasUl = document.getElementById("listaCompras");
const perguntaItem = document.getElementById("perguntaItem");
const feedbackMessage = document.getElementById("feedbackMessage");

let listaCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    carnes: [],
    legumes: [],
    outros: []
};

btnComecar.addEventListener("click", () => {
    telaInicial.style.display = "none";
    telaAdicionarItem.style.display = "block";
    updateQuestionText();
});

btnSim.addEventListener("click", () => {
    divFormulario.style.display = "block";
    perguntaItem.style.display = "none";
    btnSim.style.display = "none";
    btnNao.style.display = "none";
    btnRemover.style.display = "none";
});

btnNao.addEventListener("click", () => {
    mostrarLista();
    telaAdicionarItem.style.display = "none";
    telaMostrarLista.style.display = "block";

    const liVoltarNao = document.createElement("li");
    liVoltarNao.innerHTML = `<button id="btnVoltarNao">Voltar para adicionar/remover</button>`;
    listaComprasUl.appendChild(liVoltarNao);

    document.getElementById("btnVoltarNao").addEventListener("click", () => {
        telaMostrarLista.style.display = "none";
        telaAdicionarItem.style.display = "block";
        perguntaItem.style.display = "block";
        btnSim.style.display = "inline-block";
        btnNao.style.display = "inline-block";
        btnRemover.style.display = "inline-block";
        updateQuestionText();
    });

    perguntaItem.style.display = "none";
    btnSim.style.display = "none";
    btnNao.style.display = "none";
    btnRemover.style.display = "none";
});

btnAdicionar.addEventListener("click", () => {
    const nome = itemNomeInput.value.trim();
    const categoria = itemCategoriaSelect.value;

    if (nome === "") {
        mensagemErro.style.display = "block";
        return;
    }

    mensagemErro.style.display = "none";
    listaCompras[categoria].push(nome);
    itemNomeInput.value = "";
    itemCategoriaSelect.selectedIndex = 0;
    divFormulario.style.display = "none";
    updateQuestionText();
    showFeedbackMessage(`"${nome}" foi adicionado à lista de compras na categoria "${categoria}".`);

    perguntaItem.style.display = "block";
    btnSim.style.display = "inline-block";
    btnNao.style.display = "inline-block";
    btnRemover.style.display = "inline-block";
});

btnRemover.addEventListener("click", () => {
    telaAdicionarItem.style.display = "none";
    telaMostrarLista.style.display = "block";
    mostrarListaParaRemocao();
});

function mostrarLista() {
    listaComprasUl.innerHTML = "";

    for (const categoria in listaCompras) {
        const itens = listaCompras[categoria];
        if (itens.length > 0) {
            const liCategoria = document.createElement("li");
            liCategoria.innerHTML = `<b>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:</b> ${itens.join(", ")}`;
            listaComprasUl.appendChild(liCategoria);
        }
    }
}

function mostrarListaParaRemocao() {
    listaComprasUl.innerHTML = "";
    let itemIndex = 0;
    for (const categoria in listaCompras) {
        const itens = listaCompras[categoria];
        if (itens.length > 0) {
            itens.forEach((item) => {
                const liItem = document.createElement("li");
                const buttonId = `remover-${itemIndex}`;
                liItem.innerHTML = `
                ${item}
                <button id="${buttonId}" data-categoria="${categoria}" data-item="${item}">Remover</button>
                `;
                listaComprasUl.appendChild(liItem);

                document.getElementById(buttonId).addEventListener("click", (event) => {
                    const categoria = event.target.dataset.categoria;
                    const itemParaRemover = event.target.dataset.item;
                    removerItemEspecifico(categoria, itemParaRemover);
                });
                itemIndex++;
            });
        }
    }

    if (hasItemsInList()) {
        const liVoltarNao = document.createElement("li");
        liVoltarNao.innerHTML = `<button id="btnVoltarLista">Voltar para adicionar/remover</button>`;
        listaComprasUl.appendChild(liVoltarNao);

        document.getElementById("btnVoltarLista").addEventListener("click", () => {
            telaMostrarLista.style.display = "none";
            telaAdicionarItem.style.display = "block";
            updateQuestionText();
            perguntaItem.style.display = "block";
            btnSim.style.display = "inline-block";
            btnNao.style.display = "inline-block";
            btnRemover.style.display = "inline-block";
        });
    }
}

function removerItemEspecifico(categoria, itemParaRemover) {
    const index = listaCompras[categoria].indexOf(itemParaRemover);
    if (index > -1) {
        listaCompras[categoria].splice(index, 1);
        showFeedbackMessage(`"${itemParaRemover}" foi removido da lista de compras.`);
    } else {
        showFeedbackMessage("Não foi possível encontrar o item dentro da lista!");
    }

    mostrarLista();
    telaMostrarLista.style.display = "none";
    telaAdicionarItem.style.display = "block";
    updateQuestionText();
    perguntaItem.style.display = "block";
    btnSim.style.display = "inline-block";
    btnNao.style.display = "inline-block";
    btnRemover.style.display = "inline-block";
}

function updateQuestionText() {
    let questionText = "Deseja adicionar um item à lista de compras? (sim/não)";
    if (hasItemsInList()) {
        questionText += " ou remover?";
        btnRemover.style.display = "inline-block";
    } else {
        btnRemover.style.display = "none";
    }
    perguntaItem.textContent = questionText;
}

function hasItemsInList() {
    for (const categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            return true;
        }
    }
    return false;
}

function showFeedbackMessage(message) {
    feedbackMessage.textContent = message;
    feedbackMessage.className = message.includes("foi adicionado") ? "sucesso" : "erro";
    feedbackMessage.style.display = "block";
    setTimeout(() => {
        feedbackMessage.style.display = "none";
    }, 3000);
}
