import { Link } from "react-router-dom";
const HistoricoButton = () => {
    function voltar() {
        window.history.back();
}
function proximo() {
    window.history.forward();
}
return (
    
    <div>
        <Link to="/estudos-banrisul" relative="path"><button><strong>MENU</strong></button></Link><br />
        <button onClick={voltar}>Voltar</button>
        <button onClick={proximo}>Próximo</button>
    </div>
    )
}
export default HistoricoButton;