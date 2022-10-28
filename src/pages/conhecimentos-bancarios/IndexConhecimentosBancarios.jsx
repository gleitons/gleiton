import { Link } from "react-router-dom";
import HistoricoButton from "../../componentes/HistoricoButton";
const IndexConhecimentosBancarios = () => {
    return (
        <div>
            <HistoricoButton/>
            <h2>Conhecimentos Bancários</h2>
            <Link to="/estudos-banrisul/conhecimentos-bancarios/sistema-financeiro-nacional" relative="path">
            <button>Sistema financeiro Nacional</button>
            </Link>
        </div>
    )

}

export default IndexConhecimentosBancarios;