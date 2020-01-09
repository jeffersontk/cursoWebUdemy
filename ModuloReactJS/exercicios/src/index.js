import React from 'react'
import ReactDOM from 'react-dom'

import Mult, { BoaNoite } from './components/Multiplos'

ReactDOM.render(
    <div>
        <Mult.BoaTarde nome="Jeff" />
        <BoaNoite nome="Lizz" />
    </div>
    , document.getElementById('root'))