const Hello = () => {
  return (
    <h1>Hello Pessoa</h1>
  )
}

const InputName = () => {
  return (
    <input type="text" placeholder="Digite o seu nome" />
  )
}

const InputTextarea = () => {
  return (
    <textarea placeholder="Conte um pouco sobre você:"></textarea>
  )
}

const Button = () => {
  return (
    <button>Enviar quem sou :D</button>
  )
}

const App = () => {
  return (
    <div>
      <Hello />
      <InputName />
      <br />
      <InputTextarea />
      <br />
      <Button />
    </div>
  );
}

export default App;