import styles from './lista.module.css'
function Outralista({Itens}) {
    return (
        <>
        <h3>Lista de Coisas Boas</h3>
        { Itens.length > 0 ? (
            Itens.map((Item, index) => <div className={styles.divS}> <p className={styles.lista} key={index}>{Item}</p></div>)
            ) : (
                <div className={styles.divS}> 
                <p className={styles.lista} > Não Há Lista nos itens</p>
                </div>
                
            )           
        }
        </>
    )
}
export default Outralista