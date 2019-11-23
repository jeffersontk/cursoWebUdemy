// função em JS é Frist-Class Object {citizens}
//Higher-order function
//função em JS você pode fazer quase tudo com ela

//criar de forma literal
function fun1() {}

// Armazenar em uma variavel
//função anonima, sem nome, pode ser chamada pela variavel
const fun2 = function () {}

//Armazenar em um array

const array = [function (a, b) {
    return a + b
}, fun1, fun2]

console.log(array[0](2, 3));

//Armazenar em um atributo de objeto
const obj = {}

obj.falar = function () {
    return 'Opa'
}

console.log(obj.falar());
//passar função como param
function run(fun) {
    fun()
}
run(function () {
    console.log('Executando..')
})

//uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
//chamada da função diretamente de dentro de uma função
soma(2, 3)(4)
//chamar uma função e guardar numa varivael
const cincoMais = soma(2, 3)
//chamar a função de dentro da função
cincoMais(4)