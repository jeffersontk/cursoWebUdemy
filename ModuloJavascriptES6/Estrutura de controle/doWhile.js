//Estrutura de Controle doWhile

// função onde gera um numero elatorio de acordo com a margem definida 
function gerarNumeroAleatorio(min, max){
    //Math.random() é o comando para gerar os numeros aleatoriamente
    const valor = Math.random() * (max - min)+ min
    //Math.floor arredonda para baixo o valor
    return Math.floor(valor)
}

let opcao = 0

// o do while ele executa o codigo pelo menos uma vez antes da condição
// ou seja, o teste condicional é feito no final do bloco

do{

    opcao = gerarNumeroAleatorio(-1, 10)
    console.log('numero sortiado é ' + opcao);

}while(opcao != -1)