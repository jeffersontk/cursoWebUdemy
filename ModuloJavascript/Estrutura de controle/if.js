function aprovado (nota){
    if(nota >= 7){ //maior ou igual
        console.log("aprovado com " + nota);
    }
}

aprovado(9)
aprovado(5)

function isTrue(item){
    if(item){
        console.log('se for verdade imprime: ' + item);
    }
}

isTrue()
isTrue(NaN)
isTrue(null)
isTrue(undefined)
isTrue('')
isTrue(0)
isTrue('texto')
isTrue(-1)
isTrue(1)
isTrue([]+'array')
isTrue({id: 12})
