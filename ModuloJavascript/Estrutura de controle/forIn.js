//Estrutura de Controle For in

const notas = [4,5,9.2,6, 8, 9, 7.5]
// o for in ele percorre um array, e entrega o indece dos valores contidos 
for( i in notas){
    console.log(`indece do array ${i} / valor de cada posição ${notas[i]}`);
}