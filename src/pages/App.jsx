
import '../App.css';
import HeaderCurriculo from '../componentes/HeaderCurriculo';
import Objetivo from '../componentes/Objetivo';
import Curriculo from '../componentes/Curriculo';
import Formulario from '../componentes/Formulario';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Obrigado from './Obrigado';

function App() {
  return (
    <div className="papel">
      <Router>
        <Routes>
          <Route path='https://gleiton.com.br/obrigado' element={<Obrigado/>}/>
        </Routes>
      </Router>
       <Curriculo />
      <div className='fundoVidro'>
        <HeaderCurriculo />
        <Objetivo />    
      </div>
      <Formulario />
      
    </div>
    
  );
}

export default App;
