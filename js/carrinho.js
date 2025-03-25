const modalCarrinho = document.querySelector(".modal-carrinho");
let quantidade = document.getElementById("quantidade-item");
let itemAdicionado = document.querySelector(".novo-item");
let valorTotal = 0

quantidade.innerHTML = 0;
// meus produtos
const produtos = [
    {
        id: "produto-01",
        nome: "Notebook Lenovo",
        preco: 2580.0,
        descricao: "Notebook Lenovo com 128GB de armazenamento.",
        imagem: "images/notibook.png",
    },
    {
        id: "produto-02",
        nome: "Fone de Ouvido Branco",
        preco: 49.99,
        descricao: "Fone de ouvido com fio, ideal para uso diário.",
        imagem: "images/fone-branco-fio.png",
    },
    {
        id: "produto-03",
        nome: "Impressora Multifuncional",
        preco: 799.0,
        descricao: "Impressora multifuncional com Wi-Fi e scanner.",
        imagem: "images/impressora.png",
    },
    {
        id: "produto-04",
        nome: "Caixas de Som",
        preco: 199.5,
        descricao: "Conjunto de caixas de som para PC ou notebook.",
        imagem: "images/caixas.png",
    },
    {
        id: "produto-05",
        nome: "Teclado Mecânico",
        preco: 349.9,
        descricao: "Teclado mecânico com switches de alta durabilidade.",
        imagem: "images/teclado2.png",
    },
    {
        id: "produto-06",
        nome: "Fone de Ouvido Preto",
        preco: 59.99,
        descricao: "Fone de ouvido intra-auricular com microfone.",
        imagem: "images/fone-preto.png",
    },
    {
        id: "produto-07",
        nome: "Microfone Condensador",
        preco: 279.0,
        descricao: "Microfone condensador para gravações de alta qualidade.",
        imagem: "images/mic1.png",
    },
    {
        id: "produto-08",
        nome: "Fone Branco Rosa",
        preco: 69.99,
        descricao: "Fone de ouvido moderno com design diferenciado.",
        imagem: "images/fone-branco-fundo-rosa.jpg",
    },
    {
        id: "produto-09",
        nome: "Notebook Ultrafino",
        preco: 2899.0,
        descricao: "Notebook ultrafino com tela de alta resolução.",
        imagem: "images/notibook.png",
    },
    {
        id: "produto-10",
        nome: "Microfone de Lapela",
        preco: 129.5,
        descricao: "Microfone de lapela para apresentações e entrevistas.",
        imagem: "images/mic2 (2).png",
    },
];

function mostraCarrinho() {
    modalCarrinho.style.display = "block";
}

function fecharCarrinho() {
    modalCarrinho.style.display = "none";
}



function adicionarItem(id) {
    const produto = produtos.find((produto) => produto.id === id);
    if (!produto) {
        alert("produto não encontrado");
        return;
    }

    let novoItem = `
<div class="item-carrinho">
<img src="${produto.imagem}" alt="" />
<div>
    <h5>${produto.nome}</h5>
    <p>${produto.descricao}</p>
</div>
<div class="botoes-carrinho">
    <button><i class="fa-solid fa-minus"></i></button>
    <button><i class="fa-solid fa-plus"></i></button>
    <p class="quantidade">1</p>
</div>
<h5>${produto.preco.toFixed(2)}</h5>
<i class="fa-solid fa-trash"></i>
</div>
`;
    itemAdicionado.innerHTML += novoItem;
    quantidade.innerHTML++;

    let total = document.getElementById("total-itens");


    valorTotal += produto.preco
    total.innerHTML = valorTotal.toFixed(2)
  
}

