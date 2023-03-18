import { useCallback, useEffect, useState } from 'react';
import './styles.css';



export default function CupomFiscal({ produto }) {

    const [novoProduto, setNovoProduto] = useState([]);

    const Multiplicaçao = useCallback(() => {
        produto.map((val, key) => {
            const { preco, qnt } = val;
            const total = preco * Number(qnt);

            val.total = total.toFixed(2);
            return setNovoProduto([...novoProduto, val]);

        })

    }, [produto]);


    useEffect(() => {
        Multiplicaçao();

    },)
    return (
        <body>
            <h3>Cupom Fiscal</h3>
            <table>
                <thead>
                    <tr>
                        <th>Operador</th>
                        <th>Cód</th>
                        <th>Produto</th>
                        <th>Preço Unitário</th>
                        <th>Qnt</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        novoProduto.map((val, key) => {
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
        </body>
    )
}