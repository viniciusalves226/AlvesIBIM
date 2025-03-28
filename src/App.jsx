import React from 'react';
import './App.css'; // Importando o arquivo CSS para o estilo
import Header from './components/Header';
import Container from './components/quadrado';
import Quadrado from './components/quadrado';

function App() {
  return (
    <div>
      
      <Header />

      <div className="banner_img">
        <div className="banner">
          <div className="Darkness">
            <p className="text_banner">Os Melhores Preços São Aqui</p>
          </div>
        </div>
      </div>

      <Quadrado />

      <div className="footer">
        <div className="rodape">
          <div> <p className="text_footer">Game Mania</p> </div>
          <div className="logowp">
            <p className="textwp"><b>4498636406  Av. Paraná</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

