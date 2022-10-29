import HistoricoButton from "../../componentes/HistoricoButton";
import styles from '../../componentes/Styles/EstilosEstudo.module.css'
const ConselhoMonetarioNacional = () => {
    return (
        <div>
            <HistoricoButton/>
            <h2>Conselho Monetário Nacional</h2>
            <p>CMN é o responsável por verificar se os orgãos reguladores estão cumprindo as regras</p>
            <p>As bancas geralmente fazem as perguntas em cima das ideias conflitantes, temos que as vezes decorar, pois cada orgão faz sua parte que parece ser muito parecida</p>
            <p>O CMN é o orgão deliberativo máximo do SFN, é o orgão responsável atraves da lei 4595/1964, compoe a estrutura do sistema financeiro nacional - CMN são três membros - compoes o sistema da economia, subordinado apenas ao presidente da republica.</p>
            <p>É o orgão resposável por fixar as diretrixes das politicas monetária, crediticia e cambial do país</p>
            <h2>Composição do CMN</h2>
            <p>Ministro de Estado da Economia</p>
            <p>Presidente do Banco Central do Brasil</p>
            <p>Secretario Especial de Fazenda do Ministério da Economia</p>

            <h2>Objetivos do CMN</h2>
            <p>Orientar: A aplicação dos recursos das instituições financeiras, quer público quer privadas, tendo em vista propiciar, nas diferentes regiões do pais, condições favoraveis ao desenvolvimento harmônico </p>
            <h3>Competencias</h3>
            <p>Aprovar orçamentos monetários, preparados pelo banco central da republica do Brasil.</p>
            <p>Propiciar...</p>
            <img className={styles.imgLock} src='../../conselho-monetario-nacional.png' alt="" />

        </div>
    )
}
export default ConselhoMonetarioNacional;