import React from 'react';
import './style.css';
import Calculadora from '../../components/Calculadora';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
function Inicio(){
  return(
        <section> 
            <Navbar/>
            <div className="centralizar">
              <p>IMC é a sigla para Índice de Massa Corporal,que é um cálculo que serve para avaliar se a pessoa está dentro do seu peso ideal em relação à altura. Assim, de acordo com o valor do resultado de IMC, a pessoa pode saber se está dentro do peso ideal, acima ou abaixo do peso desejado.</p>
              <img src={require('../../assets/Img/img1.jpg')} className="imgs" />
              <h1>Entenda como é calculado seu IMC com o Dr. Fustinoni</h1>
              <iframe className="video" src="https://www.youtube.com/embed/Rc9Ftm2j2t0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela.</p>
              <span>Importante: siga os exemplos e use pontos como separadores.</span>
            </div>
            <div className="tabela">
            <img src={require('../../assets/Img/img-calc.png')} className="imgs" />
            <Calculadora/>
            </div>
            <Footer/>
        </section>
  )
}
export default Inicio ;