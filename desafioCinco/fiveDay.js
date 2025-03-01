/* Para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não. Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata. Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.
Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma: Caso você adicione na sua lista: banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca. O programa deverá imprimir, por exemplo: Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho */

    const telaInicial = document.getElementById("telaInicial");
    const telaAdicionarItem = document.getElementById("telaAdicionarItem");
    const telaMostrarLista = document.getElementById("telaMostrarLista");
    
    const btnComecar = document.getElementById("btnComecar");
    const btnSim = document.getElementById("btnSim");
    const btnNao = document.getElementById("btnNao");
    
    const divFormulario = document.getElementById("divFormulario");
    const itemNomeInput = document.getElementById("itemNome");
    const itemCategoriaSelect = document.getElementById("itemCategoria");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const mensagemErro = document.getElementById("mensagemErro");
    
    const listaComprasUl = document.getElementById("listaCompras");
    
    let listaCompras = {
        frutas: [],
        laticinios: [],
        congelados: [],
        doces: [],
        carnes: [],
        legumes: [],
        outros: []
    };
    
    // Começar o jogo
    btnComecar.addEventListener("click", () => {
        telaInicial.style.display = "none";
        telaAdicionarItem.style.display = "block";
    });
    
    // Deseja adicionar item?
    btnSim.addEventListener("click", () => {
        divFormulario.style.display = "block";
    });
    
    btnNao.addEventListener("click", () => {
        mostrarLista();
        telaAdicionarItem.style.display = "none";
        telaMostrarLista.style.display = "block";
    });
    
    // Adicionar item à lista
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
    });
    
    // Mostrar Lista de Compras
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