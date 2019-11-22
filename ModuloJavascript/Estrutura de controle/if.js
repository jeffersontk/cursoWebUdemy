//Estrutura de Controle IF

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
// condições onde o if da false
isTrue()
isTrue(NaN)
isTrue(null)
isTrue(undefined)
isTrue('')
isTrue(0)
//condições que o if da true
isTrue('texto')
isTrue(-1)
isTrue(1)
isTrue([]+'array')
isTrue({id: 12})
