const btnAddItem = document.getElementById("btnAddItem");
const btnMostrarLista = document.getElementById("btnMostrarLista");
const divAdicionarItem = document.getElementById("divAdicionarItem");
const divListaCompras = document.getElementById("divListaCompras");
const divResultado = document.getElementById("divResultado");
const itemNomeInput = document.getElementById("itemNome");
const itemCategoriaSelect = document.getElementById("itemCategoria");
const btnSalvarItem = document.getElementById("btnSalvarItem");
const btnCancelarItem = document.getElementById("btnCancelarItem");
const listaComprasUl = document.getElementById("listaCompras");
const resultadoP = document.getElementById("resultado");

let listaCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    carnes: [],
    legumes: [],
    outros: []
};

btnAddItem.addEventListener("click", () => {
    divAdicionarItem.style.display = "block";
    divListaCompras.style.display = "none";
    divResultado.style.display = "none";
});

btnCancelarItem.addEventListener("click", () => {
    divAdicionarItem.style.display = "none";
});

btnSalvarItem.addEventListener("click", () => {
    const nome = itemNomeInput.value.trim();
    const categoria = itemCategoriaSelect.value;

    if (nome !== "") {
        listaCompras[categoria].push(nome);
        itemNomeInput.value = "";
        divAdicionarItem.style.display = "none";
        mensagem.style.display = "none";
    } else {
        mensagem.style.display = "block";
    }
});

btnMostrarLista.addEventListener("click", () => {
    divListaCompras.style.display = "block";
    divAdicionarItem.style.display = "none";
    divResultado.style.display = "none";

    // Limpar a lista atual
    listaComprasUl.innerHTML = "";

    for (const categoria in listaCompras) {
        const itens = listaCompras[categoria];
        if (itens.length > 0) {
            const liCategoria = document.createElement("li");
            liCategoria.innerHTML = `<b>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:</b> ${itens.join(", ")}`;
            listaComprasUl.appendChild(liCategoria);
        }
    }
});