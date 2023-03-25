import { useEffect } from 'react';
import './styles.css';


export default function CarrinhoCompras({ produto, setProduto, arrayCarrinho, setArrayCarrinho }) {

    function handleDelete(e, codigo) {
        e.preventDefault()
        const excluidoArray = arrayCarrinho.filter((item) => item.codigo !== codigo)
        setArrayCarrinho([...excluidoArray])
    }


    return (
        <div>
            <h3>Carrinho de compras</h3>
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