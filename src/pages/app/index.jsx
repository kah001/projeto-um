import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function App() {
  return (
    <div className="pagina">
      <h1><Cabecalho titulo='Estudos ReactJS'/></h1>

      <section className='geral'>
        <section className='seçao'>
          <h2>Temas Abordados</h2>
          <br />
          <ul>
            <li>
              <Link to='/contato'>Ir para contato</Link>
            </li>
            <li>
              <Link to='/eventos'>Ir para eventos</Link>
            </li>
            <li>
              <Link to='/calculadora'>Ir para a Calculadora</Link>
            </li>
            <li>
              <Link to='/variavelEstado'>Ir para Variável de Estado</Link>
            </li>
            <li>
              <Link to='/exemplos'>Ir para Exemplos</Link>
            </li>
          </ul>

        </section>
      </section>
    </div>
  );
}