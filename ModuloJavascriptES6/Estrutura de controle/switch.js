//Estrutura de Controle Switch
const imprimirResultado = function(nota){
    switch(Math.ceil(nota)){
        case 10:
        case 9:
            console.log('quadro de ouro');
            break
        case 8: case 7:
            console.log('aprovado');
            break
        case 6: case 5:
            console.log('recuperação');
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('reprovado');
            break
        default:
            console.log('não é valido');
    }
}
imprimirResultado(10)
imprimirResultado(7.5)
imprimirResultado(6)
imprimirResultado(3.58)
imprimirResultado(-1)
imprimirResultado(11)