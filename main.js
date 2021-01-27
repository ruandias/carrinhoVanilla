const produtos = [
    {
        id:'abc123',
        nome:'água',
        preco: 2,
        descricao: 'água',
        imagem: 'http://lorempixel.com.br/500/300'
    },
    {
        id:'def456',
        nome:'biscoito',
        preco: 5,
        descricao: 'biscoito',
        imagem: 'http://lorempixel.com.br/500/300'
    },
    {
        id:'ghi789',
        nome:'refrigerante',
        preco: 9,
        descricao: 'refrigerante',
        imagem: 'http://lorempixel.com.br/500/300'
    },
    {
        id:'jkl101112',
        nome:'cerveja',
        preco: 50,
        descricao: 'cerveja',
        imagem: 'http://lorempixel.com.br/500/300'
    },
]

function renderizaProduto(produto) {
    console.log(produto);
    return `<div class="col-sm-4 mb-3">
    <div class="card">
        <div class="card loja__item" >
            <img src="${produto.imagem}" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <small>${produto.preco}</small>
            <p class="card-text">${produto.descricao}</p>
            <button href="#" class="btn btn-primary">Adicionar</button>
            </div>
        </div>
    </div>
</div>
`
}

function renderizaProdutos() {
    let html = "";
    for(let i = 0 ; i < produtos.length; i++)
    {
        html = html + renderizaProduto(produtos[i]);
    }
    return html;
}


document.querySelector('.loja').innerHTML = renderizaProdutos();
