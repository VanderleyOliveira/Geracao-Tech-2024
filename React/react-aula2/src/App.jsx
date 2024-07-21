import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import { Componente1, Componente2, Componente3 } from './components/VariosComponentes';
import FormaDeBolo from './components/FormaDeBolo';
import Card from './components/Card';
import CardDinamico from './components/CardDinamico';

const App = () => {
  return (
    <>
      <Header />
      <Banner />

      <div>
        <Componente1 />
        <Componente2 />
        <Componente3 />
      </div>

      <div>
        <FormaDeBolo sabor="laranja" cobertura="chocolate" />
        <FormaDeBolo sabor="chocolate" cobertura="chantilly" />
      </div>

      <div>
        <h3>Exemplo de uso Props</h3>
        <blockquote>
          Nesse tipo de componente, é possível passar valores para os "parâmetros" quando importado para o arquivo "App.jsx" e ele mantem a tag de fechamento vazia.
        </blockquote>
        <Card title="Notícia 1" category="Esportes" tooltip="Imagem de Esporte" content="Conteúdo da notícia 1" image="https://via.placeholder.com/100" />
        <Card title="Notícia 2" category="Finanças" content="Conteúdo da notícia 2" />
        <Card title="Notícia 3" category="Tecnologia" tooltip="Imagem de Tecnologia" content="Conteúdo da notícia 3" image="https://via.placeholder.com/100" />

        <h3>Exemplo de uso Children</h3>
        <blockquote>
          Nesse tipo de componente, é usado tags de abertura e fechamento, e entre essas tags de abertura e fechamento, podemos codar tags novas dentro desse nosso componente, sem precisarmos adicionar parâmentros diretamente como no componente do tipo Props.
        </blockquote>

        <CardDinamico>
          <h2>Notícia Dinâmica 1</h2>
          <img src="https://via.placeholder.com/100" alt="Imagem" />
          <p>Conteúdo dinâmico da notícia 1</p>
        </CardDinamico>

        <CardDinamico>
          <h2>Notícia Dinâmica 2</h2>
          <p>Conteúdo dinâmico da notícia 2 sem imagem</p>
        </CardDinamico>
      </div>
    </>
  );
};

export default App;