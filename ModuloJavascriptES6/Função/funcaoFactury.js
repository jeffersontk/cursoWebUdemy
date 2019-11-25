function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'silva'
    }
}
console.log(criarPessoa());

//exemplo 2

function criaProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criaProduto('notebook', 2199.49))
console.log(criaProduto('ipad', 1199, 49));