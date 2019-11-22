//função convensional
function somaN(a, b){
    console.log(a + b);
}

somaN(1, 4)
//função guardada numa variavel
const somar = function(a , b){
    return a + b
}

console.log(somar(2, 6));

//arrow function

const multiplicar =(a , b)=>{
    return a * b
}

//retorno implicito
const subtrair = (a , b) => a - b

console.log(subtrair(5, 3));