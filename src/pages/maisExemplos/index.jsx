import './index.scss'
import { useState } from 'react'

export default function Exemplos() {

    const [qtdIngresso, setQtdIngresso] = useState()
    const [meia, setMeia] = useState(false)
    const [cupom, setCupom] = useState()
    const [total, setTotal] = useState()

    const [nota1, setNota1] = useState()
    const [nota2, setNota2] = useState()
    const [nota3, setNota3] = useState()
    const [media, setMedia] = useState()

    const [novaMeta, setNovaMeta] = useState()
    const [listaMetas, setListaMetas] = useState([])
    

    function quantidade (n) {
        let novoValor = n.target.value 
        setQtdIngresso(novoValor)
    } function meiaEntrada(n) {
        let escolha = n.target.checked 
        setMeia(escolha)
    } function valorCupom (n) {
        let novoValor = n.target.value
        setCupom(novoValor)
    } function calcular() {
        let total = 0

        if (meia == true) {
            total = qtdIngresso * 25 / 2
        } else {
            total = qtdIngresso * 25
        }

        if (cupom == 'QUERO50') {
            total /= 2
        }

        setTotal(total)
    }

    function n1(n) {
        let novoValor = n.target.value 
        setNota1(novoValor)
    } function n2(n) {
        let novoValor = n.target.value 
        setNota2(novoValor)
    } function n3(n) {
        let novoValor = n.target.value 
        setNota3(novoValor)
    } function calcularMedia() {
        let total = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
        setMedia(total)
    }

    function escrevendoMeta(a) {
        let novaMeta = a.target.value 
        setNovaMeta(novaMeta)
    } function adicionandoMeta() {
        //listaMetas.push(novaMeta) - Método convencional JS

        if (novaMeta != '') {
            setListaMetas([...listaMetas, novaMeta])
        }
    }


    return (
        <div className='pagina-exemplos pagina'>
            <header className='cabeçalho'>
                <h1>ReactJS | Mais exemplos com Variável de Estado</h1>
            </header>

            <section className='geral'>
                <section className='seçao'>
                    <h2>Venda de Ingresso | R$25.00</h2>
                    <br />

                    <div className='elementos'>
                        <div>
                            <label>Quantidade:</label>
                            <input value={qtdIngresso} onChange={quantidade} type="text" />
                        </div>
                        <div>
                            <label>Meia entrada:</label>
                            <input value={meia} onChange={meiaEntrada} type="checkbox" />
                        </div>
                        <div>
                            <label>Cupom:</label>
                            <input value={cupom} onChange={valorCupom} type="text" />
                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className='rodape'>
                        <button onClick={calcular}>Calcular</button>
                        <div className='total'>O total é: {total} </div>
                    </div>
                </section>
            </section>


            <section className='geral'>
                <section className='seçao'>
                    <h2>Média de 3 notas</h2>
                    <br />

                    <div className='elementos'>
                        <input value={nota1} onChange={n1} type="text" />
                        <input value={nota2} onChange={n2} type="text" />
                        <input value={nota3} onChange={n3} type="text" />
                    </div>
                    <br />
                    <hr />
                    <div className='rodape'>
                        <button onClick={calcularMedia}>Calcular</button>
                        <div className='total'>A média das notas é: {media}</div>
                    </div>
                </section>
            </section>


            <section className='geral'>
                <section className='seçao'>
                    <h2>Metas para daqui 5 anos</h2>
                    <br />

                    <div className='elementos'>
                        <input type="text" placeholder='Digite sua meta aqui' value={novaMeta} onChange={escrevendoMeta} />
                        <button onClick={adicionandoMeta}>Adicionar</button>
                        <br />
                    </div>

                <ul>
                    {listaMetas.map(item =>
                        <li>{item}</li>
                    )}
                </ul>

                </section>
            </section>
        </div>
    )
}