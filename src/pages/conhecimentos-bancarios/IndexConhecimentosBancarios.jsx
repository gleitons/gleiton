import { Link } from "react-router-dom";
import styles from '../../componentes/Styles/EstilosEstudo.module.css'
import HistoricoButton from "../../componentes/HistoricoButton";
const IndexConhecimentosBancarios = () => {
    return (
        <div className={styles.estudos}>
            <HistoricoButton/>
            <h2>Conhecimentos Bancários</h2>
            <Link to="/estudos-banrisul/conhecimentos-bancarios/sistema-financeiro-nacional" relative="path">
            <button>Sistema financeiro Nacional</button>
            </Link>
            <br />

            <Link to="/estudos-banrisul/conhecimentos-bancarios/conselho-monetario-nacional" relative="path">
            <button>Conselho Monetário Nacional</button>
            </Link>
        </div>
    )

}

export default IndexConhecimentosBancarios;