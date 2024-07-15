import './index.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1>
        Estudos de ReactJS
      </h1>
      <h2>
        <Link to='/contato'>Ir para o contato</Link>
      </h2>
    </div>
  );
}