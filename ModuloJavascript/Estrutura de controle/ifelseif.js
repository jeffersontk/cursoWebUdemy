Number.prototype.entre = function(inicio, fim){
    return this >=inicio && this <= fim
}

const imprirResultado = function(nota){
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

imprirResultado(10)
imprirResultado(8)
imprirResultado(6)
imprirResultado(3)
imprirResultado(-1)
imprirResultado(11)