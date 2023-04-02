import { useEffect, useState } from 'react';
import './styles.css';


export default function CarrinhoCompras({ produtos, setProduto, arrayCarrinho, setArrayCarrinho }) {
  const [negativo, setNegativo] = useState([]);



  function handleDelete(e, codigo) {
    e.preventDefault()

    const produtoEsc = negativo.find((produto) => produto.codigo === codigo);

    setProduto((prevValue) => [...prevValue, { ...produtoEsc, status: '-' }]);
    const excluidoArray = arrayCarrinho.filter((item) => item.codigo !== codigo)
    setArrayCarrinho([...excluidoArray])
  }
  useEffect(() => {
    setNegativo([...produtos])
  }, [produtos])


  return (
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/2568/2568255.png" alt='Imagem de um carrinho de compras' className='img-h3' />
      <h3 className='h3-carrinho'>Carrinho de compras</h3>
      <table>

        <thead>
          <tr>
            <th>Código:</th>
            <th>Qtd:</th>
            <th>Nome do produto:</th>
            <th>Preço:</th>
            <th>Marca:</th>
            <th>Produto:</th>
          </tr>
        </thead>
        <tbody>
          {
            arrayCarrinho.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.codigo}</td>
                  <td>{val.qnt}</td>
                  <td>{val.descricao}</td>
                  <td>R$ {val.preco}</td>
                  <td>{val.marca}</td>
                  <td><img src={val.imagem} className='imgproduto' alt={val.descricao} /></td>
                  <button onClick={(e) => handleDelete(e, val.codigo)}>Deletar</button>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}