import './index.scss'

export default function Eventos() {

    function clicar() {
        alert('O usuário acaba de clicar!')
    }

    function movimentarMouse() {
        alert('O usuário acaba de movimentar o mouse!')
    }

    function alterar(respostaUsuario) {
        let novoValor = respostaUsuario.target.value //pegar valor string
        alert(`O usuário acabou de mudar o valor do input/select para ${novoValor}`)
    }

    function alterar2(respostaUsuario) {
        let novoValor = respostaUsuario.target.checked //pegar valor booleano
        alert(`O usuário acaba de alterar o valor do input [checkbox/radio] para ${novoValor}`)
    }

    return (
        <div className='pagina-eventos pagina'>
            <header className='cabeçalho'>
                <h1> ReactJS | Eventos</h1>
            </header>

            <section className='geral'>
                <section className='seçao'>
                    <h2>Entendendo Eventos</h2>
                    <br />
                    <p onClick={clicar} onMouseMove={movimentarMouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit quia expedita. Error, tempora officiis quis dolorem commodi repudiandae architecto aliquam consequatur, asperiores quidem, tempore reiciendis ducimus dicta sunt corrupti?</p>
                    <br />
                    <input onChange={alterar} type="text" placeholder='Digite aqui' />

                    <select onChange={alterar}>
                        <option>Selecione</option>
                        <option>Item A</option>
                        <option>Item B</option>
                    </select>

                    <div className='grupo'>
                        <input onChange={alterar2} type="checkbox" /> Opção 1
                        <input onChange={alterar2} type="checkbox" /> Opção 2
                    </div>

                    <div className='grupo'>
                        <input type="radio" /> Opção 1
                        <input type="radio" /> Opção 2
                    </div>

                    <button onClick={clicar}> Clique aqui </button>

                </section>
            </section>
        </div>
    )
}