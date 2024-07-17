import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina">
      <header className='cabeçalho'>
        <h1>Estudos de ReactJS</h1>
      </header>

      <section className='geral'>
        <section className='seçao'>
          <h2>Estudando ReactJS</h2>
          <br />
          <ul>
            <li>
              <Link to='/contato'>Ir para contato</Link>
            </li>
            <li>
              <Link to='/eventos'>Ir para eventos</Link>
            </li>
            <li>
              <Link to='/variavelEstado'>Ir para Variável de Estado</Link>
            </li>
            <li>
              <Link to='/calculadora'>Ir para a Calculadora</Link>
            </li>
          </ul>
          <br />
          <input type="text" className='' placeholder='Digite aqui' />
          <br />
          <select>
            <option value="">Item 1</option>
            <option value="">Item 2</option>
            <option value="">Item 3</option>
            <option value="">Item 4</option>
            <option value="">Item 5</option>
            </select>
          <button>Clique aqui</button>
        </section>
      </section>
    </div>
  );
}