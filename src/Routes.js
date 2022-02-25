import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from './views/Inicio';
import Sobre from './views/Sobre';
import Contato from './views/Contato';


const Router = () => {
    return( 
        <BrowserRouter> 
            <Routes>
                <Route exact path="/" element={<Inicio/>}/>
                <Route  path="/sobre" element={<Sobre/>}/>
                <Route  path="/contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;