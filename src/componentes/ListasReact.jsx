import styles from './ListReact.module.css'
import Outralista from './Outralista'
function ListaReact() {
    const meusItens = ['react', 'vue', 'angular']
    return (
        <div className={styles.listaDados}>
            <h2>Lista React Arrays</h2>
            <Outralista Itens = {meusItens} />
            <h2>Mais Itens</h2>
            <Outralista Itens = {[]} />
        </div>
    )
}
export default ListaReact