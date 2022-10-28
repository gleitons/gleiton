import HistoricoButton from "../componentes/HistoricoButton";
import styles from '../componentes/Styles/EstilosEstudo.module.css'
import { Link } from "react-router-dom";
const EstudosBanrisul = () => {
    return (
        <div className="estudos">
        <HistoricoButton/>
        <h1>Estudos Banrisul</h1>
        <div className={styles.conhecimentos}>
        <h2>Conhecimentos Básicos</h2>
        <ul>
        <li>Lingua Portuguesa</li>
        <li>Matemática</li>
        <li>Raciocínio Lógico</li>
        <li>Domínio Produtivo de informática</li>
        </ul>
        </div>

        <div className={styles.conhecimentos}>
        <h2>Conhecimentos Específicos</h2>
        <ul>
        <Link to="/estudos-banrisul/conhecimentos-bancarios" relative="path">
            <li>Conhecimentos bancários</li>
        </Link>
        <li>Atendimento ética e diversidade</li>
        <li>Técnica de vendas</li>
        </ul>
        </div>
        
        

        
        </div>
    )

}
export default EstudosBanrisul;