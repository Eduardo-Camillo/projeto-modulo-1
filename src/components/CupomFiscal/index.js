import { useEffect, useState } from 'react';
import './styles.css';

export default function CupomFiscal({ produto, somando, setSomando }) {

  const [arrayCupom, setArrayCupom] = useState([]);

  useEffect(() => {
    setArrayCupom([...produto]);
    const total = produto.reduce((acc, val) => {
      if (val.status === '-') {
        return acc - Number(val.total);
      }
      return acc + Number(val.total);
    }, 0);
    setSomando(total);
  }, [produto, setSomando]);

  return (
    <body>
      <h3 className='Cabecalho-cupom'>Cupom Fiscal</h3>
      <table className='Cupom-fiscal'>
        <thead>
          <tr>
            <th>Operador</th>
            <th>Cód</th>
            <th>Produto</th>
            <th>Preço Unitário</th>
            <th>Qnt</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            arrayCupom.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.status}</td>
                  <td>{val.codigo}</td>
                  <td>{val.descricao}</td>
                  <td>R${val.preco}</td>
                  <td>{val.qnt}</td>
                  <td>{val.total}</td>
                </tr>
              )
            })
          }
          <div>{(somando).toFixed(2)}</div>
        </tbody>
      </table>
      <button className='imprimir'>Imprimir</button>
    </body>
  )
}