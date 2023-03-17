import './styles.css';

export default function ListaProdutos({ produtos }) {

    return (
        <body>
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