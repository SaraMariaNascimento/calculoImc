import React,{useState} from 'react';
import './style.css';

export default function Calculadora(){
  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)


  const calc=(peso,altura)=>{ 
    setResultado(peso/(altura*altura))
  }
    return(
      <div className="container">
        <div>
          <label>
            <p>Peso (Quilos)</p>
            <input type="number" value={peso} onChange={(e)=>{setPeso(e.target.value)}}/>
          </label>
        </div>
        <div> 
          <label>
            <p>Altura (Metros)</p>
            <input type="number" value={altura} onChange={(e)=>{setAltura(e.target.value)}}/>
          </label>
        </div>
        <div> 
          <p>Resultado: {resultado.toFixed(2)}</p>
        </div>
        <div> 
          <button onClick={()=>calc(peso,altura)}> Calcular</button>
        </div>
      </div>
    )
}