const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`);
}

fabricantes.forEach(imprimir)
//normal function
fabricantes.forEach(function (fabricante) {
    console.log(fabricante);
})
//Arrow function
fabricantes.forEach(fabricante => console.log(fabricante))

//exemplo 2
const notas = [7.5, 7, 10, 3.8, 5.6, 9.5, 8.4, 6.5]

//sem callback

let notasBaixas0 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas0.push(notas[i])
    }
}

console.log(notasBaixas0)

//com callback

notasBaixas1 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas1)
notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)

//exmplo 3 de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('o evento ocorreu');
}