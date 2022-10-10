import styles from './Styles/HeaderCurriculo.module.css'
const HeaderCurriculo = () => {
    return (
        <div /*className={styles.sectionHeader}*/>
           
            <div className={styles.infoCapa}>
                <div className={styles.fotoPerfil}>
                    <img src="https://avatars.githubusercontent.com/u/31367377" alt="" />
                </div>
                <div>
                    <h2>GLEITON APARECIDO SOARES DE SOUZA</h2>
                    <p>Brasileiro, solteiro, 33 anos</p>
                    <p>Endereço: Rua Pirapó, 514, 001</p>
                    <p>Bairro Igara, Canoas – RS</p>
                    <p>Telefone: (51) 98065-2808 / E-mail: gleiton.adm@gmail.com</p>
                    <div>
                        <div>
                            icone linkedin
                            LINKEDING
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default HeaderCurriculo;