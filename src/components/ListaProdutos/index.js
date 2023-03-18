import './styles.css';

export default function ListaProdutos({ produtos }) {

    return (
        <body>
            <h3>Tabela de consulta de produtos</h3>
            <table>
                <tr>
                    <th>Código</th>
                    <th>Descriçao</th>
                    <th>Marca</th>
                    <th>Preço</th>
                </tr>
                {produtos.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.codigo}</td>
                            <td>{val.descricao}</td>
                            <td>{val.marca}</td>
                            <td>R$ {val.preco}</td>
                        </tr>
                    )
                })}
            </table>
        </body>
    )
}