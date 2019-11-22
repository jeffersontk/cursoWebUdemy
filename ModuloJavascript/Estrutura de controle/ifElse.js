function aprovado (nota){
    //criando uma condição if, caso nota seja maior ou igual a condição é true
    if(nota >= 7){ //maior ou igual
        console.log("aprovado com " + nota);
    }
    // caso seja false executa o else
    else{
        console.log('reporvado')
    }
}

// teste chamada da função
aprovado(6)

aprovado(9)