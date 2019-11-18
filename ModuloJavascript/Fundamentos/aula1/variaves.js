// tipo de variaveis

/*
    int, float, double, char, boolean 
*/

//declaração de variavel
//variavel global
var a
//variavel local
let b
//atribuição
a = 1
b = 2
//constante 
const c = 10

console.log(a, b ,c);

// javascript é fracamente tipado, ou seja você pode mudar o tipo primitivo da variavel quando quiser

// ex

a = 'abc'
b = false
console.log(a, b ,c);
//verificando o tipo da varivael
// utiliza o comando typeof

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//boas praticas
//Evitar siglas e nomes genericos