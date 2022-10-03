import logo from './logo.svg';
import './App.css';
import Apresentacao from './componentes/Apresentacao';
import Frases from './componentes/Frases';
import SaymyName from './componentes/SaymyName';
import Pessoa from './componentes/Pessoa';
import Pessoastruct from './componentes/Pessoastruct';
import Continua from './componentes/Continua';
import Item from './componentes/Item';
import Evento from './componentes/Evento';
import Form from './componentes/Form';



function App() {
  const name = "Gleiton";
  const lastName = "Aparecido Soares de Souza";
  const nomeCompleto = `${name} ${lastName}`;
  const nomeMaisculo = nomeCompleto.toUpperCase();
  function sum(a, b){
    const soma = a + b;
    return soma;
  }
  const imagem = "https://www.salamineira.com/img/anuncie-gratis-sala-mineira-lagoa-dos-patos-mg-min.png"
  return (


    <div className="App">
      <Frases />
      <Form />
      <h1>Meu Projeto</h1>
      <Evento numero={2}/>
      <Evento numero={5}/>
      <ul>
        <Item marca = "Ferrari" lancamento={1999}/>
        <Item marca = "Volksvagem" lancamento={1980}/>
        <Item marca = "Porche" lancamento={1985}/>
        <Item marca = "Tesla" lancamento={1989}/>
        <Item />
      </ul>
      <SaymyName nome="Matheus" />
      <SaymyName nome="Ana" />
      <SaymyName nome="Gleiton" />
      <h2>{name} {lastName}</h2>
      <h3>{nomeMaisculo}</h3>
      <p>A some de 1 + 2 = <strong>{sum(1,2)}</strong></p>
      <img src={imagem} alt="Imagem" />
      <Apresentacao/>
      <Frases />
      <Pessoa 
      nome = "Gleiton"
      idade = "33"
      profissao = "Administrador" />
      <Pessoastruct 
      foto= {imagem}
      nome="Soares de Souza"
      idade = "32"
      profissao="Engenheiro" />
      <Continua />
      
    </div>
    
  );
}

export default App;
