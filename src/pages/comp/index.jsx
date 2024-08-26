import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/cabecalho'
import ListaPlanos from '../../components/listaPlanos'
import CartaoFilme from '../../components/cartaoFilme'

export default function Comp() {

    const [plano, setPlano] = useState('')
    const [situacao, setSituacao] = useState('')
    const [cor, setCor] = useState('')
    const [lista, setLista] = useState([])


    const [filme, setFilme] = useState('')
    const [classificacao, setClassificacao] = useState('')
    const [capa, setCapa] = useState('')
    const [listaFilme, setListaFilme] = useState([])

    function adicionarPlano() {
        if (plano != '' && cor != '' && situacao != '') {
            let novoPlano = {
                titulo: plano,
                tempo: situacao, 
                tema: cor
            }
    
            setLista([...lista, novoPlano])
    
            setPlano('')
            setSituacao('')
            setCor('')
        }
    }

    function adicionarFilme() {
        if (filme != '' && classificacao != '' && capa != '') {
            let novoFilme = {
                nome: filme,
                classificacao: classificacao,
                url: capa
            }
    
            setListaFilme([...listaFilme, novoFilme])
            setFilme('')
            setClassificacao('')
            setCapa('')
        }
    }


    return (
        <div className='pagina-comp pagina'>
            <h1><Cabecalho titulo='ReactJS | Exemplos com Componentes'/></h1>

            <section className='geral'>
                <section className='seçao'>
                    <h2>Meus planos atuais</h2>
                    <br />

                    <div className='elementos'>
                        <input type="text" placeholder='Meus planos atuais aqui' value={plano} onChange={e => setPlano(e.target.value)}/>
                        <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={e => setSituacao(e.target.value)}/>
                        <input type="text" placeholder='Cor de identificação' value={cor} onChange={e => setCor(e.target.value)}/>
                        <button onClick={adicionarPlano}>Adicionar</button>
                    </div>

                    <div className='lista'>
                        {lista.map ((item, pos) =>
                            <ListaPlanos item = {item} />
                        )}
                    </div>
                </section>
            </section>


            <section className='geral'>
                <section className='seçao'>
                    <h2>Catálogo de Filmes</h2>
                    <br />

                    <div className='elementos'>
                        <input type="text" placeholder='Nome do filme' value={filme} onChange={e => setFilme(e.target.value)}/>
                        <input type="text" placeholder='Classificação' value={classificacao} onChange={e => setClassificacao(e.target.value)}/>
                        <input type="text" placeholder='URL da capa' value={capa} onChange={e => setCapa(e.target.value)}/>
                        <button onClick={adicionarFilme}>Adicionar</button>
                    </div>

                    <div className='lista'>
                        {listaFilme.map (item =>
                            <CartaoFilme item={item}/>
                        )}
                    </div>
                </section>
            </section>
        </div>
    )
}