import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Sobre() {
  return(
    <section>
      <Navbar/>
      <div className="conteudo">
        <h1>
          IT'S ALL ABOUT US!
        </h1>
        <span className="frase"> 
        Os homens perdem a saúde para juntar dinheiro, depois perdem o dinheiro para recuperar a saúde. E por pensarem ansiosamente no futuro esquecem do presente de forma que acabam por não viver nem no presente nem no futuro. E vivem como se nunca fossem morrer... e morrem como se nunca tivessem vivido.
        -Jim Brown
        </span>
        <p>Somos uma empresa séria que se importa com a saúde  e o bem estar da população, pois com a saúde conseguiremos desfrutar o melhor da vida! </p><br/>
        <img src={require('../../assets/Img/tab-horario.png')} className="img-tab"/>
      </div>
      
      <Footer/>
    </section>
  );
}

export default Sobre;
