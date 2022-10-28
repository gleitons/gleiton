
import '../App.css';
import Curriculo from '../componentes/Curriculo';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Obrigado from './Obrigado';
import Home from './Home';
import EstudosBanrisul from './EstudosBanrisul';


function App() {
  return (
    <div className="papel">
      {/* <MenuTop/> */}
      <Curriculo />
      <Router>
        <Routes>
          <Route path="obrigado" element={<Obrigado/>}/>
          <Route path="estudos-banrisul" element={<EstudosBanrisul/>}/> 
          <Route path="/" element={<Home/>}/>          
        </Routes>
      </Router>
       
      
      
      
    </div>
    
  );
}

export default App;
