function gerarNumeroAleatorio(min, max){
    const valor = Math.random()* (min - max)+ min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = gerarNumeroAleatorio(-1, 10)
    console.log('numero sortiado é ' + opcao);
}