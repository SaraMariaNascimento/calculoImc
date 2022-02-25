import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Navbar(){
  return(
      <div className="header">
          <a className="logo">
            <img src={require('../../assets/Img/logo.png')} className="img"/> 
          </a>
          <nav>
            <ul className="menu"> 
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
          </nav>
      </div>
  );
}
export default Navbar ;