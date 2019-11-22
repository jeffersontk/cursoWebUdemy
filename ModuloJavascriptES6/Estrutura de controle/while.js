//Estrutura de Controle While

// função onde gera um numero elatorio de acordo com a margem definida 
function gerarNumeroAleatorio(min, max){
    //Math.random() é o comando para gerar os numeros aleatoriamente
    const valor = Math.random() * (max - min)+ min
    //Math.floor arredonda para baixo o valor
    return Math.floor(valor)
}

let opcao = 0

//loop onde o teste é realixado no começo do bloco, ate que a contição seja aceita

while(opcao != -1){
    opcao = gerarNumeroAleatorio(-1, 10)
    console.log('numero sortiado é ' + opcao);
 
}