
import './App.css';
import HeaderCurriculo from './componentes/HeaderCurriculo';
import Objetivo from './componentes/Objetivo';
import Curriculo from './componentes/Curriculo';



function App() {
  return (
    <div className="papel">
       <Curriculo />
      <div className='fundoVidro'>
        <HeaderCurriculo />
        <Objetivo />
      </div>
    </div>
    
  );
}

export default App;
