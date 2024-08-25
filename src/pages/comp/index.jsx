import './index.scss'
import Cabecalho from '../../components/cabecalho'
import { useState } from 'react'

export default function Comp() {

    const [plano, setPlano] = useState('')
    const [situacao, setSituacao] = useState('')
    const [cor, setCor] = useState('')
    const [lista, setLista] = useState([])

    function adicionarPlano () {
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
                            <div className='plano' key={pos}>
                                <div className='cor' style={{ backgroundColor: item.tema }}></div>
                                <h1>{item.titulo}</h1>
                                <p>{item.tempo}</p>
                            </div>
                        )}
                    </div>
                </section>
            </section>

            <section className='geral'>
                <section className='secao'>
                    <h2>Catálogo de Filmes</h2>
                    
                    <div className='elementos'>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </section>
            </section>
        </div>
    )
}