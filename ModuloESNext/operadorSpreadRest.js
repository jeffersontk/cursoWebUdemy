// operador ... rest(juntar)/spread(espalhar)
//usar rest como parametro de função

//usar spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: 12.300
}
const clone = {
    ativo: true,
    ...funcionario
}
console.log(clone);

//usar spread com Array
const grupoA = ['joão', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal);