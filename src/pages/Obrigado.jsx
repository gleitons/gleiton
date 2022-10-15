import styles from '../componentes/Styles/Obrigado.module.css'

function Obrigado() {
    return (
        <>
        <div className={styles.mensagemObrigado}>
            <h1>Obrigado, sua mensagem foi enviada com sucesso</h1>
            <h3>Entrarei em contato em breve</h3>
            <p>Caso queira, pode entrar em contato comigo agora mesmo, meu whatsapp está aqui, nesta mesma página abaixo, estou online agora, vamos conversar</p>
            <a href="/"><button>Clique aqui para fechar</button></a>
        </div>
        </>
    )
}
export default Obrigado;