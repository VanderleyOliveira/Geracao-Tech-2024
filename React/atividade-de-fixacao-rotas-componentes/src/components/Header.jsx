import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Meu Site</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre Nós</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;