export default function Tabela(){
  return(
    <table border='1' >  
      <thead> 
          <tr> 
              <th>Classificação</th>
              <th>IMC</th>
          </tr>
      </thead>
      <tbody> 
          <tr>
            <td>Abaixo do Peso</td>
            <td>Abaixo de 18,5</td>
          </tr>
          <tr>
            <td>Peso Normal</td>
            <td>Entre 18,5 e 24,9</td>
          </tr>
          <tr>
            <td>Sobrepeso Peso</td>
            <td>Entre 25 e 29,9</td>
          </tr>
          <tr>
            <td>Obesidade grau I</td>
            <td>Entre 30 e 34,9</td>
          </tr>
          <tr>
            <td>Obesidade grau II</td>
            <td>Entre 35 e 39,9</td>
          </tr>
          <tr>
            <td>Obesidade grau III</td>
            <td>Maior que 40</td>
          </tr>
      </tbody>
    </table>
  )
}
