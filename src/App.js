import React from "react";
import "./App.css";
import imagem from "./compartilhar.png";
import favorito from "./favorito.png";

function App() {
  return (
    <div>
      <div className="barra">
        <div className="texto-container">
          <h1 className="texto"> TESTE CATEGORIA </h1>
        </div>
      </div>
      <div className="imagem-container">
        <h1 className="titulo">TESTE CURSO </h1>
        <p className="subtitulo"> Duração | Nivel </p>
        <p className="instituicao"> Intituição </p>
        <p className="instituicao"> Valor </p>
        <p className="instituicao"> Proximidade: </p>
        <p className="descricao"> Descrição: </p>
        <p className="descricaotexto"> aaaaaaaaaa </p>
        <img src={imagem} alt="Descrição da imagem" />
      </div>
      <div className="imagem-container">
        <img src={favorito} alt="Descrição da imagem" />
      </div>
      <button className="button">Clique aqui</button>
    </div>
  );
}

export default App;
