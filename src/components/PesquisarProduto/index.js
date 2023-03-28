import { useCallback, useRef, useState } from 'react';
import './styles.css';

export default function PesquisarProduto({ produtos, setProduto, setArrayCarrinho, arrayCarrinho }) {

  const inputCodigoRef = useRef();
  const inputQuantidadeRef = useRef();
  const [atualizado, setAtualizado] = useState(false);
  const [atualizado2, setAtualizado2] = useState(false);
  const [atualizado3, setAtualizado3] = useState(false);

  const handleAdicionar = useCallback(() => {
    const produtoEsc = produtos.find((produto) => {
      produto.status = '+'
      return (produto.codigo) === +inputCodigoRef.current.value;
    });
    const { current: { value } } = inputQuantidadeRef;
    const jaExiste = 'Vazio';

    if (arrayCarrinho.length > 0) {
      const existente = arrayCarrinho.some((existe) => existe.codigo === +inputCodigoRef.current.value);
      if (existente) {
        alert('Produto já está no carrinho de compras');
        setAtualizado(false);
        setAtualizado2(false);
        setAtualizado3(false);
        inputCodigoRef.current.value = '';
        inputQuantidadeRef.current.value = '';
        return;
      }
    }

    if (!produtoEsc && !value) {
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


    } else if (!produtoEsc) {
      setAtualizado(false);
      setAtualizado2(false);
      setAtualizado3(true)
      inputCodigoRef.current.value = '';
      inputQuantidadeRef.current.value = '';


    } else if (jaExiste === 'Vazio') {
      produtoEsc.qnt = value
      const total = produtoEsc.preco * Number(produtoEsc.qnt);
      produtoEsc.total = total.toFixed(2);
      setProduto((prevValue) => [...prevValue, produtoEsc])
      setArrayCarrinho((prevValue) => [...prevValue, produtoEsc])
      inputCodigoRef.current.value = '';
      inputQuantidadeRef.current.value = '';
      setAtualizado(false);
      setAtualizado2(false);
      setAtualizado3(false);
    }
  }, [setProduto, setArrayCarrinho, produtos, arrayCarrinho])


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
      <button onClick={handleAdicionar}>Adicionar</button>
    </div>
  )
}