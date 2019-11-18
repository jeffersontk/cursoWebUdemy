let isAtivo = false
console.log(isAtivo);
isAtivo = true
console.log(isAtivo);

isAtivo = 1

console.log(!!isAtivo);

console.log ('exemplos de true')

console.log(!!1);
console.log(!!-1);
console.log(!!' ');
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!isAtivo == true);

console.log("exemplos de false")

console.log(!!0);
console.log(!!'');
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!isAtivo == false);

// || = ou

console.log('' || NaN || 0 || 'ola mundo');

let nome = ''
console.log(nome || 'Desconhecido');

