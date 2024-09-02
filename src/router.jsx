import Contato from './pages/contato';
import App from './pages/app';
import NaoEncontrado from './pages/naoEncontrado';
import Eventos from './pages/eventos';
import VariavelEstado from './pages/variavelEstado';
import Calculadora from './pages/calculadora';
import Exemplos from './pages/maisExemplos';
import Treinando from './pages/treinando';
import Comp from './pages/comp';
import RenderizacaoCondicional from './pages/renderizacao';
import Efeitos from './pages/efeitos';

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
                <Route path='/treinando' element= {<Treinando />} />
                <Route path='/comp' element= {<Comp />} />
                <Route path='/renderizacao' element={<RenderizacaoCondicional/>} />
                <Route path='/efeitos' element={<Efeitos />} />

                <Route path='*' element= {<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    );
}