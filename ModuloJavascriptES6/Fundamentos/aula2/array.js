let valor = [ 1 , 15, 55, 0 , 2,66]

console.log(valor[0], valor[5])

valor[6] = 10
console.log(valor[6]);
console.log(valor.length);

valor.push({id:3}, null, 'texto', false)

console.log(valor.pop());

delete valor[0]
console.log(typeof valor);

console.log(valor);