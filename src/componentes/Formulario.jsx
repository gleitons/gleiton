import styles from '../componentes/Styles/Formulario.module.css'

const Formulario = () => {
    return (
        <div>
            <div className={styles.formEnvi}>
                <div className={styles.moduleItens}>
                    <div className={styles.cardC}>
                        <i class="bi bi-geo-alt-fill"></i>
                        <h3>Meu Endereço</h3>
                        <p>Endereço: Rua Pirapó, 514, 001 - Bairro Igara, Canoas – RS</p>
                    </div>
                    <div className={styles.cardC}>
                        <i class="bi bi-geo-alt-fill"></i>
                        <h3>Meu Endereço</h3>
                        <p>Endereço: Rua Pirapó, 514, 001 - Bairro Igara, Canoas – RS</p>
                    </div>
                    <div className={styles.cardC}>
                        <i class="bi bi-geo-alt-fill"></i>
                        <h3>Meu Endereço</h3>
                        <p>Endereço: Rua Pirapó, 514, 001 - Bairro Igara, Canoas – RS</p>
                    </div>
                    <div className={styles.cardC}>
                        <i class="bi bi-geo-alt-fill"></i>
                        <h3>Meu Endereço</h3>
                        <p>Endereço: Rua Pirapó, 514, 001 - Bairro Igara, Canoas – RS</p>
                    </div>
                    
                </div>
                <div className={styles.divF}>
                    <h2>Entre em Contato Conosco</h2>
                    <div className={styles.textA}>
                        <p>
                            <input type="text" name="nome" id="nome" />
                            </p>
                        <p>
                            <input type="email" name="email" id="email" />
                            </p>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Formulario;