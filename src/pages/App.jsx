
import '../App.css';
import Curriculo from '../componentes/Curriculo';
import ConselhoMonetarioNacional from './conhecimentos-bancarios/ConselhoMonetarioNacional';
import IndexConhecimentosBancarios from './conhecimentos-bancarios/IndexConhecimentosBancarios';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Obrigado from './Obrigado';
import Home from './Home';
import EstudosBanrisul from './EstudosBanrisul';
import SistemaFinanceiroNacional from './conhecimentos-bancarios/SistemaFinanceiroNacional';


function App() {
  return (
    <div className="papel">
      {/* <MenuTop/> */}
     
      <Router >
      <Curriculo />
        <Routes>
          <Route path="/obrigado" element={<Obrigado/>}/>
          <Route path="/estudos-banrisul" element={<EstudosBanrisul/>}/> 
          <Route path="/estudos-banrisul/conhecimentos-bancarios/sistema-financeiro-nacional" element={<SistemaFinanceiroNacional/>}/> 
          <Route path="/estudos-banrisul/conhecimentos-bancarios/conselho-monetario-nacional" element={<ConselhoMonetarioNacional/>}/> 
          <Route path="/estudos-banrisul/conhecimentos-bancarios" element={<IndexConhecimentosBancarios/>}/>

          <Route path="/" element={<Home/>}/>          
        </Routes>
      </Router>
       
      
      
      
    </div>
    
  );
}

export default App;
