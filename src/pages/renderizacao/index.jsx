import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/cabecalho/index'
import CartaoFilme from '../../components/cartaoFilme'

export default function RenderizacaoCondicional() {
    const [exibirBiscoito, setExibirBiscoito] = useState(false)

    const [filme, setFilme] = useState('')
    const [classificacao, setClassificacao] = useState('')
    const [capa, setCapa] = useState('')
    const [estreia, setEstreia] = useState ('')
    const [destaque, setDestaque] = useState (false)
    const [listaFilme, setListaFilme] = useState([])


    function abrirFechar() {
        setExibirBiscoito(!exibirBiscoito)
    }


    function adicionarFilme() {
        if (filme != '' && classificacao != '' && capa != '') {
            let novoFilme = {
                nome: filme,
                classificacao: classificacao,
                url: capa,
                estreia: estreia,
                destaque: destaque
            }

            setListaFilme([...listaFilme, novoFilme])
            setFilme('')
            setClassificacao('')
            setCapa('')
        }
    }

    return (
        <div className='pagina-renderizacao pagina'>
            <Cabecalho titulo='ReactJS | Renderização Condicional' />

            <section className='geral'>
                <section className='seçao'>
                    <h2>Biscoitinho da Sorte</h2>
                    <br />


                    <div className='elementos'>
                        <button onClick={abrirFechar}>{exibirBiscoito == false ? 'Abrir' : 'Fechar'}</button>

                        {exibirBiscoito == true &&
                            <p className='msg'>"Sempre haverá pessoas melhores e piores em habilidades diferentes. Avance e ajude!"</p>
                        }
                    </div>

                </section>
            </section>

            <section className='geral'>
                <section className='seçao'>
                    <h2>Catálogo de Filmes</h2>
                    <br />

                    <div className='elementos'>

                        <div className='info'>
                            <input type="text" placeholder='Nome do filme' value={filme} onChange={e => setFilme(e.target.value)} />
                            <input type="text" placeholder='Classificação' value={classificacao} onChange={e => setClassificacao(e.target.value)} />
                            <input type="text" placeholder='URL da capa' value={capa} onChange={e => setCapa(e.target.value)} />
                            <input type="text" placeholder='Estreia do filme' value={estreia} onChange={e => setEstreia(e.target.value)}/>

                        </div>

                        <div className='destaque'>
                            <input type="checkbox" value={destaque} onChange={e => setDestaque(e.target.checked)}/>
                            <label>Destaque</label>
                        </div>

                        <button onClick={adicionarFilme}>Adicionar</button>
                    </div>

                    <div className='lista'>
                        {listaFilme.map((item, pos) =>
                            <CartaoFilme item={item} />
                        )}
                    </div>

                </section>
            </section>
        </div>
    )
}