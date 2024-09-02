import './index.scss';
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function App() {
  return (
    <div className="pagina">
      <Cabecalho titulo='Estudos ReactJS'/>

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
            <li>
              <Link to='/comp'>Ir para exemplos com Componentes</Link>
            </li>
            <li>
              <Link to='/renderizacao'>Ir para Renderização Condicional</Link>
            </li>
            <li>
              <Link to='/efeitos'>Ir para Efeitos</Link>
            </li>
          </ul>

        </section>
      </section>
    </div>
  );
}