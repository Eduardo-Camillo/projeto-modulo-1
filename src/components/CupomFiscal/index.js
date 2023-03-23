import './styles.css';



export default function CupomFiscal({ produto }) {

    const multiplicaçao = (produto) => {
        const { preco, qnt } = produto;
        const total = preco * Number(qnt);
        produto.total = total.toFixed(2);
        return produto;
    }
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
                        produto.map((val, key) => {
                            const total = val.preco * Number(val.qnt);
                            val.total = total.toFixed(2);
                            return (
                                <tr key={key}>
                                    <td>O.p</td>
                                    <td>{val.codigo}</td>
                                    <td>{val.descricao}</td>
                                    <td>R${val.preco}</td>
                                    <td>{val.qnt}</td>
                                    <td>{val.total}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
            <button className='imprimir'>Imprimir</button>
        </body>
    )
}