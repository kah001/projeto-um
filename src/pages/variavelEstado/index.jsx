import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/cabecalho'

export default function VariavelEstado() {

    //Variáveis de Estado
    const [contador, setContador] = useState(0)
    const [seçao2, setSeçao2] = useState('Oiee')
    const [seçao3, setSeçao3] = useState('Escolha um item:')
    const [seçao4, setSeçao4] = useState(false)

    const [seçao5, setSeçao5] = useState('Oie')
    const [descriçao5, setDescriçao5] = useState('Oie')



    //Mundo JavaScript


    //let contador = 0
    function aumentar() {
        //contador ++
        setContador(contador + 1)
    }

    function diminuir() {
        //contador --
        setContador(contador - 1)
    }

    function escrever (a) {
        let novoValor = a.target.value 
        setSeçao2(novoValor)
    }

    function alterarSeçao3(a) {
        let novoValor = a.target.value
        setSeçao3(novoValor)
    }

    function alterarSeçao4 (a) {
        let novoValor = a.target.checked
        setSeçao4(novoValor)
    }
    
    function alterarSeçao5 () {
        setSeçao5(descriçao5)
    }


    
    //Mundo JSX

    return (
        <div className='pagina-variavelEstado pagina'>
            <h1><Cabecalho titulo='ReactJS | Variável de Estado'/></h1>

            <section className='geral'>
                <section className='seçao'>
                    <h2>Contador</h2>
                    <br />

                    <div className='cont'>
                        <button onClick={aumentar}> + </button>
                            {contador}
                        <button onClick={diminuir}> - </button>
                    </div>

                </section>
            </section>


            <section className='geral'>
                <section className='seçao'>
                    <h2>{seçao2}</h2>
                    <br />
                    <input type="text" value={seçao2} onChange={escrever}/>
                </section>
            </section>



            <section className='geral'>
                <section className='seçao'>
                    <h2>{seçao3}</h2>
                    <br />
                    <select onChange={alterarSeçao3}>
                        <option>Selecione</option>
                        <option>HTML / CSS</option>
                        <option>JavaScript</option>
                        <option>ReactJS</option>
                    </select>
                </section>
            </section>


            <section className='geral'>
                <section className='seçao'>
                    <h2>Programar é lindezinha? {seçao4 ? 'Sim' : 'Não'} </h2>
                    <br />
                    <input type="checkbox" onChange={alterarSeçao4} checked={seçao4}/> Programar é lindezinha
                </section>
            </section>

            
            <section className='geral'>
                <section className='seçao'>
                    <h2> {seçao5} </h2>
                    <input type="text"value={descriçao5} onChange={a => setDescriçao5(a.target.value)} />
                    <button onClick={alterarSeçao5}>Alterar</button>
                </section>
            </section>


        </div>
    )
}