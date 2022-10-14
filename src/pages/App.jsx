
import '../App.css';
import HeaderCurriculo from '../componentes/HeaderCurriculo';
import Objetivo from '../componentes/Objetivo';
import Curriculo from '../componentes/Curriculo';
import Formulario from '../componentes/Formulario';

import { Route, Routes } from 'react-router-dom';

import Obrigado from './Obrigado';

function App() {
  return (
    <div className="papel">
       <Curriculo />
      <div className='fundoVidro'>
        <HeaderCurriculo />
        <Objetivo />    
      </div>
      <Formulario />
      <Routes>
        <Route path='./obrigado' element={<Obrigado/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
