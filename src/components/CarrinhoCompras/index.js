import './styles.css';

export default function CarrinhoCompras({ produto }) {

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
                        produto.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.codigo}</td>
                                    <td>{val.qnt}</td>
                                    <td>{val.descricao}</td>
                                    <td>R$ {val.preco}</td>
                                    <td>{val.marca}</td>
                                    <td><img src={val.imagem} style={{ width: '100px' }} alt={val.descricao} /></td>
                                    <button>Deletar</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}