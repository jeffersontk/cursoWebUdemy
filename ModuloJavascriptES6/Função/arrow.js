//Arrow functions sempre será uma função anonima

//por isso quardamos ela numa varivael

let dobro = (a) => {
    return a * 2
}
// retorno implicito
dobro1 = a => a * 2 // quando é so uma expressão e quando só tiver um unico parametro pode fazer dessa forma reduzida
soma = (a, b) => a + b // quando é so uma expressão pode fazer dessa forma reduzida

console.log(dobro(2))
console.log(dobro1(3));
console.log(soma(4, 4));

//função normal
function ola() {
    return 'ola'
}
//a mesma função só que sendo arrow function
ola = () => 'ola'

//Arrow function com this
//no arrow function o this não vareia de acordo com quem está chamando
function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade);
    }, 1000);
}