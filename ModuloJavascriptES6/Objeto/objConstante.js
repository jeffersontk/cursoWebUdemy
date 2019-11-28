//pessoa -> 123 -> {...}
const pessoa = {
    nome: 'joao'
}
pessoa.nome = 'Pedro'
console.log(pessoa);

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'} --- vai dar erro

Object.freeze(pessoa) // vai congelar o objeto não podendo mudar nada do objeto

pessoa.nome = 'Maria'

console.log(pessoa.nome);

const pessoaConstante = Object.freeze({
    nome: 'joão'
})
pessoaConstante.nome = 'Maria' // não muda o pessoa
console.log(pessoaConstante);