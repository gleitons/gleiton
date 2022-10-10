
import './App.css';
import HeaderCurriculo from './componentes/HeaderCurriculo';
import Objetivo from './componentes/Objetivo';




function App() {
  return (
    <div className="papel">
       <h1>Gleiton Aparecido Soares de Souza</h1>
       <h2>Curriculum vitæ </h2>
      <div className='fundoVidro'>
        <HeaderCurriculo />
        <Objetivo />
      </div>
    </div>
    
  );
}

export default App;
