const modalCarrinho = document.querySelector(".modal-carrinho");
let quantidade = document.getElementById("quantidade-item");
let itemAdicionado = document.querySelector(".novo-item");
let valorTotal = 0;

quantidade.innerHTML = 0;

const produtos = [
    {
        id: "produto-01",
        nome: "Notebook Lenovo Ideapad",
        preco: 3299.9,
        descricao: "Intel Core i5, 8GB RAM, 256GB SSD.",
        imagem: "images/notibook.png",
    },
    {
        id: "produto-02",
        nome: "Fone JBL Tune 110",
        preco: 89.9,
        descricao: "Fone com fio, graves profundos.",
        imagem: "images/fone-branco-fio.png",
    },
    {
        id: "produto-03",
        nome: "Impressora HP LaserJet Pro",
        preco: 2500.0,
        descricao: "Impressão rápida e eficiente.",
        imagem: "images/impressora.png",
    },
    {
        id: "produto-04",
        nome: "Caixa JBL Flip 6",
        preco: 79.9,
        descricao: "Bluetooth, som potente, à prova d'água.",
        imagem: "images/caixas.png",
    },
    {
        id: "produto-05",
        nome: "Teclado Logitech G PRO",
        preco: 56.8,
        descricao: "Mecânico, switches GX Blue, RGB.",
        imagem: "images/teclado2.png",
    },
    {
        id: "produto-06",
        nome: "Fone de ouvido Bluetooth X",
        preco: 149.9,
        descricao: "Fone sem fio, alta qualidade de som.",
        imagem: "images/fone-preto.png",
    },
    {
        id: "produto-07",
        nome: "Microfone Condensador Profissional",
        preco: 299.9,
        descricao: "Ideal para gravações e podcasts.",
        imagem: "images/mic1.png",
    },
    {
        id: "produto-08",
        nome: "Fone de ouvido Bluetooth Y",
        preco: 129.9,
        descricao: "Design moderno, bateria de longa duração.",
        imagem: "images/fone-branco-fundo-rosa.jpg",
    },
    {
        id: "produto-09",
        nome: "Notebook Samsung Ultra Leve",
        preco: 3599.9,
        descricao: "Tela Full HD, 512GB SSD, 16GB RAM.",
        imagem: "images/notibook.png",
    },
    {
        id: "produto-10",
        nome: "Microfone USB para PC",
        preco: 129.5,
        descricao: "Fácil de usar, com conexão USB.",
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

    valorTotal += produto.preco;
    total.innerHTML = valorTotal.toFixed(2);
}


