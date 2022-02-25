import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Footer(){
  return(
       <section className="menu-rodape"> 
            <h1 className="logo">SE CUIDE!</h1>
            <ul className=""> 
            <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
       </section>
  )
}
export default Footer;