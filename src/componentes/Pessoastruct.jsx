import styles from './Frase.module.css'

function Pessoastruct({nome, idade, foto, profissao}) {
    return (
        <div className={styles.frasecontainer}>
            <img src={foto} alt={nome} />
            <h2 >Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão {profissao}</p>
        </div>
    )
}
export default Pessoastruct;
