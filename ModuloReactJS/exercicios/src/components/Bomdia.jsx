import React from 'react'
export default props =>
    <div>
        <h1>Bom dia {props.nome}</h1>
        <h2>Até breve!</h2>
    </div>

    //Exibir elementos sem ser envolvidos por uma tag
    //<React.Fragment>
    //   <h1>Bom dia {props.nome}</h1>
    //   <h2>Até breve!</h2>
    //</React.Fragment>

/*
também pode ser feito com Array
quando é usado o Array para renderizar os elementos,
é preciso dar uma key unica para cada elemento

... props=> [
       <elemento1 key='e1'>ola</elemento1>,
       <elemento2 key='e2'>mundo</elemento2>
   ]
*/