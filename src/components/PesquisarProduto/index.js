import { useEffect, useRef, useState } from 'react';
import './styles.css';

export default function PesquisarProduto({ produtos, setProduto }) {

    const inputCodigoRef = useRef();
    const inputQuantidadeRef = useRef();
    const [prevValue, setPrevValue] = useState([]);
    const [atualizado, setAtualizado] = useState(false);
    const [atualizado2, setAtualizado2] = useState(false);
    const [atualizado3, setAtualizado3] = useState(false);

    function handleAdicionar(e) {
        e.preventDefault();
        const produto = produtos.find((produto) => (produto.codigo) == inputCodigoRef.current.value);
        const { current: { value } } = inputQuantidadeRef;

        if (!produto && !value) {
            setAtualizado(true);
            setAtualizado2(false);
            setAtualizado3(false);
            inputCodigoRef.current.value = '';
            inputQuantidadeRef.current.value = '';

        } else if (!value) {
            setAtualizado(false);
            setAtualizado2(true)
            setAtualizado3(false);
            inputCodigoRef.current.value = '';
            inputQuantidadeRef.current.value = '';


        } else if (!produto) {
            setAtualizado(false);
            setAtualizado2(false);
            setAtualizado3(true)
            inputCodigoRef.current.value = '';
            inputQuantidadeRef.current.value = '';


        }
        else {
            produto.qnt = value
            setPrevValue([...prevValue, produto])

            inputCodigoRef.current.value = '';
            inputQuantidadeRef.current.value = '';

        }

    }

    useEffect(() => {
        setProduto(prevValue);
        setAtualizado(false);
        setAtualizado2(false);
        setAtualizado3(false);
    }, [prevValue])


    return (

        <div className='container-pesquisar'>
            <h3 className='subtitulo-produto'>Pesquisa de Produtos</h3>
            <div style={{ color: 'red' }}> {atualizado ? 'Preencha os dois campos!' : ""} </div>
            <div style={{ color: 'red' }}>{atualizado3 ? 'Preencha o código do produto!' : ""}</div>
            <div style={{ color: 'red' }}> {atualizado2 ? 'Preencha a quantidade!' : ""}</div>
            <div className='container-produto'>
                <div>Código do produto:</div>
                <input className='caixa-produto' type='number' ref={inputCodigoRef}></input>
            </div>
            <div className='container-quantidade'>
                <div>Quantidade:</div>
                <input className='caixa-quantidade' type='number' ref={inputQuantidadeRef}></input>
            </div>
            <button onClick={handleAdicionar} >Adicionar</button>
        </div>
    )
}