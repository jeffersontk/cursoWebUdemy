/*Tipo String
    formas de declarar uma string
    "exemplo1"
    'exemplo2'
    `exemplo3`
*/
const nome = "jefferson"
//charAt retorna um caracter de acordo com a possição escolida
console.log(nome.charAt(4));

//usando tample string, com essa forma de declarar pode se usar javascript no meio da string dentro de ${}

console.log(`o nome é ${nome}`);

//descobrir se a um caracter dentro da string e em qual possição

console.log(nome.indexOf('j'))
console.log(nome.substring(3));
console.log(nome.substring(0, 3));
console.log(nome.replace('e', 'a'));

console.log('ana, jeff, joao, jose'.split(','))