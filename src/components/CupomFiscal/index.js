import { useEffect, useState } from 'react';
import './styles.css';

export default function CupomFiscal({ produto }) {

    return (
        <body>
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
                        produto.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>O.p</td>
                                    <td>{val.codigo}</td>
                                    <td>{val.descricao}</td>
                                    <td>R${val.preco}</td>
                                    <td>{val.qnt}</td>
                                    <td>{val.preco}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </body>
    )
}