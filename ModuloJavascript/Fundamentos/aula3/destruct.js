//novo recurso do ES6

const pessoa = {
    nome: 'jeff',
    idade: 23,
    endereco:{
        rua: 'rua d',
        numero: 128
    }
}

const {nome, idade} = pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa
console.log(n,i);