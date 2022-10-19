
import '../App.css';
import Curriculo from '../componentes/Curriculo';
import Formulario from '../componentes/Formulario';
// import MenuTop from '../componentes/MenuTop';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Obrigado from './Obrigado';
import Home from './Home';

function App() {
  return (
    <div className="papel">
      {/* <MenuTop/> */}
      <Curriculo />
      <Router>
        <Routes>
          <Route path='/Obrigado' element={<Obrigado/>}/>
          <Route path='/' element={<Home/>}/>          
        </Routes>
      </Router>
       
      
      <Formulario />
      
    </div>
    
  );
}

export default App;
