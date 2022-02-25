import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Sobre() {
  return(
    <section>
      <Navbar/>
      <div className="contato">
        <form> 
            <legend>Entre em contato conosco através do e-mail.</legend>
            <div className="area-conf">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" />
            </div>
            <div className="area-conf">
                <label for="email">E-mail:</label>
                <input type="email" id="email" />
            </div>
            <div className="msg-area">
                <div className="msg">
                    <label for="msg">Mensagem:</label>
                </div>
                <div className="text">
                    <textarea rows="10" cols="30" id="msg"></textarea>
                </div>
            </div>
            <div class="button">
                <button type="submit">Enviar sua mensagem</button>
            </div>
        </form>
      </div>
      <Footer/>
    </section>
  );
}

export default Sobre;
