import React from 'react'
import './Logo.css'
import logo from '../../assets/imgs/logo2.png'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img className="img-fluid" src={logo} alt="logo" />
        </a>
    </aside>