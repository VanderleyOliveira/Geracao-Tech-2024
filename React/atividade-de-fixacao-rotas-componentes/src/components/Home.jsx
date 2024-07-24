import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Bem-vindo ao site!</p>
      <Link to="/about">Sobre Nós</Link>
      <Link to="/contact">Contato</Link>
    </div>
  );
}

export default Home;