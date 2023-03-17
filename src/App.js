import Cabecalho from './components/Cabecalho';
import { useState } from 'react';
import './App.css';
import ListaProdutos from './components/ListaProdutos';
import PesquisarProduto from './components/PesquisarProduto';
import CupomFiscal from './components/CupomFiscal';


function App() {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <PesquisarProduto produtos={produtos} />
        <CupomFiscal />
      </div>
    </div>
  );
}

export default App;
