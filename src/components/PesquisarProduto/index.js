import './styles.css';

export default function PesquisarProduto({ produtos }) {
    return (
        <div className='container-pesquisar'>
            <div className='subtitulo-produto'>Pesquisa de Produtos</div>
            <div className='container-produto'>
                <div>Código do produto:</div>
                <input className='caixa-produto' type='number'></input>
            </div>
            <div className='container-quantidade'>
                <div>Quantidade:</div>
                <input className='caixa-quantidade' type='number'></input>
            </div>
            <button>Adicionar</button>
        </div>
    )
}