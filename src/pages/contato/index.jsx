import './index.css';
import { Link } from 'react-router-dom';

export default function Contato() {
    return(
        <div className='Contato'>
            <h1>Contato</h1>
            <img className='icone-contato' src="/assets/images/telefone.png" alt="" />
            <h2>
                <Link to='/'>Voltar</Link>
            </h2>
        </div>
    );
}