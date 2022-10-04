import Button from "./events/Button"
function Evento({numero}) {
    function meuEvento() {
        alert(`Opa, fui ativado, foi pressionado o numero ${numero}`);
        
    }
    return(
        <div>
            <p>clique para disparar um evento</p>
            <Button text="Recebe Texto" />
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}
export default Evento