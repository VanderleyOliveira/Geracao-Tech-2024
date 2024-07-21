import React, { useState } from 'react';
import './App.css' // Arquivo de estilos (App.css) para estilização básica

const FeedbackForm = () => {
  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  // Funções para atualizar os estados conforme os campos são preenchidos
  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    // Verifica se os campos estão preenchidos
    if (nome.trim() === '' || email.trim() === '' || comentario.trim() === '') {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }

    // Exibe os dados do formulário em um alerta
    alert(`Nome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`);

    // Pode-se também limpar os campos após o envio, se desejado
    // setNome('');
    // setEmail('');
    // setComentario('');
  };

  return (
    <div className='container-geral'>
      <div className="feedback-form">
        <h2>Formulário de Feedback</h2>
        <form>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={handleNomeChange}
              placeholder="Digite seu nome"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Digite seu email"
            />
          </div>
          <div className="form-group">
            <label>Comentário:</label>
            <textarea
              value={comentario}
              onChange={handleComentarioChange}
              placeholder="Digite seu comentário"
            />
          </div>
          <button type="button" onClick={handleSubmit}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
