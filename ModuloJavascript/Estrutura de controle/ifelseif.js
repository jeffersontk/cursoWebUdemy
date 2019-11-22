//Estrutura de Controle if encadeado else if 

//criando uma função Entre como protoType para definir se o numero esta na faixa definida
Number.prototype.entre = function(inicio, fim){
    return this >=inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('quadro de ouro');
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado');
    }else if(nota.entre(5, 6.99)){
        console.log('recuperação');
    }else if(nota.entre(0, 4.99)){
        console.log('reprovado');
    }else{
        console.log('não é valido');
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)