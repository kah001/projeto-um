import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/cabecalho'


export default function Calculadora() {
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [resultado, setResultado] = useState()

    const [nRAizQuadrada, setNRaizQuadrada] = useState()
    const [resRaizQuadrada, setResRaizQuadrada] = useState()

    const [n1Sub, setN1Sub] = useState()
    const [n2Sub, setN2Sub] = useState()
    const [resSub, setResSub] = useState()

    const [n1mul, setN1mul] = useState()
    const [n2mul, setN2mul] = useState()
    const [resMul, setResMul] = useState()

    const [n1div, setN1div] = useState()
    const [n2div, setN2div] = useState()
    const [resDiv, setResDiv] = useState()



    function alterarN1 (n){
        let novoValor = n.target.value
        setN1(novoValor)
    }
    function alterarN2 (n) {
        let novoValor = n.target.value
        setN2(novoValor)
    }
    function somar () {
        let soma = Number(n1.replaceAll(',' , '.')) + Number(n2.replaceAll(',' , '.'))
        setResultado(soma)
    }
    function alterarNRQ (a) {
        let novoValor = a.target.value
        setNRaizQuadrada (novoValor)
    }
    function calcularRaizQuadrada () {
        let raizQuadrada = Number(nRAizQuadrada)
        setResRaizQuadrada(Math.sqrt(raizQuadrada))
    }
    function alterarN1Sub(n) {
        let novoValor = n.target.value 
        setN1Sub(novoValor)
    }
    function alterarN2Sub(n) {
        let novoValor = n.target.value 
        setN2Sub(novoValor)
    }
    function subtrair() {
        let subtraçao = Number(n1Sub.replaceAll(',' , '.')) - Number(n2Sub.replaceAll(',' , '.'))
        setResSub(subtraçao)
    }
    function alterarN1mul(n) {
        let novoValor = n.target.value 
        setN1mul(novoValor)
    }
    function alterarN2mul(n) {
        let novoValor = n.target.value 
        setN2mul(novoValor)
    }
    function multiplicar() {
        let multiplicaçao = Number(n1mul.replaceAll(',' , '.')) * Number(n2mul.replaceAll(',' , '.'))
        setResMul(multiplicaçao)
    }
    function alterarN1div(n) {
        let novoValor = n.target.value 
        setN1div(novoValor)
    }
    function alterarN2div(n) {
        let novoValor = n.target.value 
        setN2div(novoValor)
    }
    function dividir() {
        let divisao = Number(n1div.replaceAll(',' , '.')) / Number(n2div.replaceAll(',' , '.'))
        setResDiv(divisao)
    }



    return (

        // value = o que deve ser mostrado, renderizado
        // onChange = o que será mostrado ao atualizar
        
        <div className='pagina-calculadora pagina'>

            <h1><Cabecalho titulo='ReactJS | Calculadora'/></h1>


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
                    <h2>Subtração</h2>

                    <div className='elementos'>
                        <input value={n1Sub} onChange={alterarN1Sub} type="text" />
                        <input value={n2Sub} onChange={alterarN2Sub} type="text" />
                        <div>=</div>
                        <div className='resposta'>{resSub}</div>
                        <button onClick={subtrair}>Subtrair</button>
                    </div>
                </section>
            </section>


            <section className='geral'>
                <section className='seçao'>
                    <h2>Multiplicação</h2>

                    <div className='elementos'>
                        <input value={n1mul} onChange={alterarN1mul} type="text" />
                        <input value={n2mul} onChange={alterarN2mul} type="text" />
                        <div>=</div>
                        <div className='resposta'>{resMul}</div>
                        <button onClick={multiplicar}>Multiplicar</button>
                    </div>
                </section>
            </section>


            <section className='geral'>
                <section className='seçao'>
                    <h2>Divisão</h2>

                    <div className='elementos'>
                        <input value={n1div} onChange={alterarN1div} type="text" />
                        <input value={n2div} onChange={alterarN2div} type="text" />
                        <div>=</div>
                        <div className='resposta'>{resDiv}</div>
                        <button onClick={dividir}>Dividir</button>
                    </div>
                </section>
            </section>

            <section className='geral'>
                <section className='seçao'>
                    <h2>Raiz Quadrada</h2>

                    <div className='elementos'>
                        <input value={nRAizQuadrada} onChange={alterarNRQ} type="text"  />
                        <div>=</div>
                        <div className='resposta'>{resRaizQuadrada}</div>
                        <button onClick={calcularRaizQuadrada}>Calcular</button>
                    </div>
                </section>
            </section>


        </div>
    )
}