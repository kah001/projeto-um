import Contato from './pages/contato';
import App from './pages/app';
import NaoEncontrado from './pages/naoEncontrado';
import Eventos from './pages/eventos';
import VariavelEstado from './pages/variavelEstado';
import Calculadora from './pages/calculadora';
import Exemplos from './pages/maisExemplos';

import { BrowserRouter, Routes, Route} from 'react-router-dom';



export default function Navegação() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<App />} />  
                <Route path='/contato' element= {<Contato />} />
                <Route path='/eventos' element= {<Eventos />} />
                <Route path='/variavelEstado' element= {<VariavelEstado />} />
                <Route path='/calculadora' element= {<Calculadora />} />
                <Route path='/exemplos' element= {<Exemplos />} />

                <Route path='*' element= {<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    );
}