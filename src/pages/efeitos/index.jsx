import './index.scss'
import { useState, useEffect } from 'react'
import Cabecalho from '../../components/cabecalho'

export default function Efeitos() {
    const [situacao, setSituacao] = useState('')
    const [mencao, setMencao] = useState('')

    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [media, setMedia] = useState(0)
    const [sit, setSit] = useState('')

    function alterar() {
        if (mencao == 'P') {
            setSituacao('Plenamente Satisfatório')
        } else if (mencao == 'S') {
            setSituacao('Satisfatório')
        } else if (mencao == 'NS') {
            setSituacao('Não Satisfatório')
        } else {
            setSituacao('Inválido.')
        }
    } 

    useEffect(() => {
        alterar()
    }, [mencao])

    

    function calcularMedia () {
        let m = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
        setMedia(m.toFixed(2))
    }
    useEffect(() => {
        calcularMedia()
    }, [nota1, nota2, nota3])


    function sitAluno () {
        if (media >= 6) {
            setSit('Aprovado')
        } else {
            setSit('Reprovado')
        }
    }

    useEffect(() => {
        sitAluno()
    }, [media])




    return (
        <div className='pagina-efeitos pagina'>
            <Cabecalho titulo='ReactJS | Efeitos' />

            <section className='geral'>
                <section className='seçao'>
                    <h2>Situação Aluno</h2>
                    <br />

                    <div className='elementos'>
                        <p>{situacao}</p>

                        <div className='mencao'>
                            <label>Menção:</label>
                            <input type="text" value={mencao} onChange={a => setMencao(a.target.value)} />
                        </div>
                    </div>
                </section>
            </section>

            <section className='geral'>
                <section className='seçao'>
                    <h2>Notas Aluno</h2>
                    <br />

                    <div className='elementos'>

                        <div className='notas'>
                            <input type="text" placeholder='Nota 1' value={nota1} onChange={a => setNota1(a.target.value)} />
                            <input type="text" placeholder='Nota 2' value={nota2} onChange={a => setNota2(a.target.value)} />
                            <input type="text" placeholder='Nota 3' value={nota3} onChange={a => setNota3(a.target.value)} />
                        </div>

                        <div className='media'>
                            <label>Média:</label>
                            <div>{media}</div>
                        </div>

                        <div className='situacao'>
                            <label>Sit.:</label>
                            <div>{sit}</div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}