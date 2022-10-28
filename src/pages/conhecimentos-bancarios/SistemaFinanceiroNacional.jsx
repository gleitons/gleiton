import HistoricoButton from "../../componentes/HistoricoButton";
import { Link } from "react-router-dom";

const SistemaFinanceiroNacional = () => {
    return (
        <div>
            <HistoricoButton/>
            <h2>Sistema financeiro Nacional (SFN)</h2>
            <p>O SNF é formado por um conjunto de entidades e instituições que promovem intermediação financeira, isto é, o encontro entre credores e tomadores de recursos. É por meio do sistema financeiro que as pessoas, as empresas e o governo circulam a maior parte dos seus ativos, pagam suas dívidas e realizam seus investimentos.</p>
            <h2>Funções do SFN</h2>
            <p>Intermediação Financeira: É o encontro entre quem precisa de dinheiro e quem tem dinheiro para emprestar</p>
            <h2>Mercados do SNF</h2>
            <h3>Mercado Monetário</h3>
            <p>Taxa selic 13,75%, o mercado monetário está restringindo a oferta de moeda no mercado tentando diminuir a inflação do país, aumenta a selic para restringir a quantidade de moeda no mercado.</p>
            <h3>Mercado de Crédito</h3>
            <p>Emprestimo, normal</p>
            <h3>Mercado de Cambio</h3>
            <p>Troca de moedas estrangeiras com a nacional</p>
            <h3>Mercado de capitais</h3>
            <p>Galera investidora</p>
            <h3>Mercado de seguros Privados</h3>
            <p>Temos a de seguro normal, inss, aposentadoria privada complementar a pública</p>
            <h3>Mercado de Previdência Fechada</h3>
            <p>O importante é que veremos mais a frente, mais detalhes a frente.</p>
            <h2>Orgão de regulação</h2>
            <p>Autorregulação: Acontece quando os entes se juntam para regular, quando os entres privados, quando o pessoal do sistema operacional, escolhe as regras entres os proprios participantes, proprios agentes que criam regras para eles mesmos, ambima, exemplo, certificações onde podemos atuar no mercado financeiro, atesta o conhecimento de que o funcionário é capacitado, onde as entidades decidem se pode escolher não</p>
            <p>A CMN é regulamentado pelo ministro da economia</p>
            <p>*Os orgão autorreguladores não podem sobrepor as regulações do governo</p>
            <p>*Lei da Usura</p>
            <p>Autorregulação</p>
            <Link to="/estudos-banrisul/conhecimentos-bancarios/conselho-monetario-nacional" relative="path"><button>CMN</button></Link>
        </div>
    )
}
export default SistemaFinanceiroNacional;