import React from 'react';
import './App.css';
import Recetas from './components/carta';



function App(props) {
  return (
        <div className="App">
            <nav class="navbar">
          <div class="logo">
            <img src={props.iconUrl} alt='' />
          </div>
          <ul class="nav-list">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <Recetas/>
        <footer className="footer">
          <div className="footer-content">
            <p>Ceado en 2023 Por Valentin Galan</p>
          </div>
        </footer>
      </div>
  );
}
export default App;