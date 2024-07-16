import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Contato from './pages/contato';
import App from './pages/app';
import NaoEncontrado from './pages/naoEncontrado';
import Eventos from './pages/eventos';

export default function Navegação() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<App />} />
                <Route path='/contato' element= {<Contato />} />
                <Route path='/eventos' element= {<Eventos />} />

                <Route path='*' element= {<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    );
}