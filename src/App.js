import ListaProdutos from './components/ListaProdutos';
import PesquisarProduto from './components/PesquisarProduto';
import CupomFiscal from './components/CupomFiscal';
import CarrinhoCompras from './components/CarrinhoCompras';
import Cabecalho from './components/Cabecalho';
import { useState } from 'react';
import { Rodape } from './components/Rodape';
import './App.css';


function App() {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [arrayCarrinho, setArrayCarrinho] = useState([]);
  const [produto, setProduto] = useState([]);
  const [somando, setSomando] = useState(0);

  useState(() =>
    fetch('produtos.json')
      .then(resp => resp.json())
      .then(dados => {
        setProdutos(dados);
        setLoading(false);
      })
      .catch(erro => console.log(erro))
  );

  if (loading) {
    return (<h1>Aguarde...</h1>)
  }

  return (
    <div className="App">
      <Cabecalho />
      <div className='App-container'>
        <ListaProdutos produtos={produtos} />
        <PesquisarProduto produtos={produtos} setProduto={setProduto} setArrayCarrinho={setArrayCarrinho} arrayCarrinho={arrayCarrinho} />
        <CarrinhoCompras setProduto={setProduto} arrayCarrinho={arrayCarrinho} setArrayCarrinho={setArrayCarrinho} produtos={produtos} />
        <CupomFiscal produto={produto} somando={somando} setSomando={setSomando} arrayCarrinho={arrayCarrinho} setArrayCarrinho={setArrayCarrinho} />
      </div>
      <Rodape />
    </div>
  );
}

export default App;
