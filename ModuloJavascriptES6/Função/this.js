// o this aponta de acordo com o escopo onde foi definido

// this função bind

const pessoa = {
    saudacao: 'fala dev',
    falar() {
        //o this está acessando a chave saudacao do proprio objeto pessoa
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigma: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
// a função bind ela faz com o this aponte pra quem ela está sendo associado
falarDePessoa()

//------------------------------------------------------------------------
function Pessoa() {
    this.idade = 0
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade);
    }, 1000);
}

new Pessoa