import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Heitor" sobrenome="Brito" >
            {/* Como passo os componentes filhos aqui? */}
            <Filho nome="Caio" />
            <Filho nome="Lizz" />
            <Filho nome="Gui" />

        </Pai>
    </div>
    , document.getElementById('root'))