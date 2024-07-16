import './index.scss';
import { Link } from 'react-router-dom';

export default function Contato() {
    return(
        <div className='pagina'>
            <header className='cabeçalho'>
                <h1>Contato</h1>
            </header>

            <section className='geral'>
                <section className='seçao'>
                    <h2>Entrar em contato</h2>
                    <img className='icone-contato' src="/assets/images/telefone.png" alt="" />
                </section>
            </section>

            <h2>
                <Link to='/'>Voltar</Link>
            </h2>
        </div>
    );
}