import styles from './Frase.module.css'

function Pessoa(props) {
    return (
        <div className={styles.frasecontainer}>
            <img src={props.foto} alt={props.nome} />
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão {props.profissao}</p>
        </div>
    )
}
export default Pessoa;