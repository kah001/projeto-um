import './index.scss'
import { useState } from 'react'


export default function Calculadora() {
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [resultado, setResultado] = useState()

    function alterarN1 (n){
        let novoValor = n.target.value
        setN1(novoValor)
    }
    function alterarN2 (n) {
        let novoValor = n.target.value
        setN2(novoValor)
    }
    function somar () {
        let soma = Number(n1) + Number(n2)
        setResultado(soma)
    }


    return (
        <div className='pagina-calculadora pagina'>

            <header className='cabeçalho'>
                <h1>ReactJS | Calculadora</h1>
            </header>


            <section className='geral'>
                <section className='seçao-calculadora seçao'>
                    <h2>Soma</h2>

                    <div className='elementos'>
                        <input value={n1} onChange={alterarN1} type="text" />
                        <input value={n2} onChange={alterarN2} type="text" />
                        <div>=</div>
                        <div className='resposta'> {resultado} </div>
                        <button onClick={somar}>Somar</button>
                    </div>

                </section>
            </section>


            <section className='geral'>
                <section className='seçao'>
                    <h2>Raiz Quadrada</h2>

                    <div className='elementos'>
                        <input type="number" />
                        <div>=</div>
                        <input type="text" />
                        <button>Calcular</button>
                    </div>
                </section>
            </section>

        </div>
    )
}