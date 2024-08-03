import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function Contato() {
    return(
        <div className='pagina'>
            <h1><Cabecalho titulo='Contato'/></h1>

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