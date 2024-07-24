import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contato</h1>
      <p>Formulário de contato...</p>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre Nós</Link>
    </div>
  );
}

export default Contact;