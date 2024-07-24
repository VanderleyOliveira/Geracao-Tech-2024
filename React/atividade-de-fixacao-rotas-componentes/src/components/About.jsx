import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>Sobre Nós</h1>
      <p>Informações sobre a empresa...</p>
      <Link to="/">Home</Link>
      <Link to="/contact">Contato</Link>
    </div>
  );
}

export default About;