import React from 'react'
import './Nav.css'
import NavItens from './NavItens'
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItens path="/" icon="home" title="Início" />
            <NavItens path="/users" icon="users" title="Usuarios" />
        </nav>
    </aside>

