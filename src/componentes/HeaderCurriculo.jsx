import styles from './Styles/HeaderCurriculo.module.css'


const HeaderCurriculo = () => {
    return (
        <>
         
        <div /*className={styles.sectionHeader}*/>
          
            <div className={styles.infoCapa}>
                <div className={styles.fotoPerfil}>
                    {/* <div>
                    <img src="./imagens/fundo-giratorio-perfil.jpg" alt="" />
                    </div> */}
                    <video width="100%" height="100%" autoplay loop muted controls>
                    <source src="../imagens/gleiton-soares-animado.mp4" type="video/mp4" />   
                    <img loading="lazy" src="../imagens/gleiton-soares-melhorado.jpg" alt="Gleiton aparecido Soares de Souza" />                 
                    <img loading="lazy" src="https://avatars.githubusercontent.com/u/31367377" alt="Gleiton aparecido Soares de Souza" />
                    </video>
                    
                </div>
                <div className={styles.infoP}>
                    <h2>GLEITON APARECIDO SOARES DE SOUZA</h2>
                    
                    
                    
                    <div className={styles.sociais}>

                    <a href="#inicio" rel='noopener noreferrer'>
                            <div className={styles.Isociais}>
                            <i class="bi bi-flag-fill"></i>
                            <p>Brasileiro, solteiro, 32 anos</p>
                            </div>
                    </a>
                    
                    <a href="https://goo.gl/maps/BL5Wk1CDyH4JVXGv5"
                        target="_blank"
                        rel='noopener noreferrer'>
                            <div className={styles.Isociais}>
                            <i class="bi bi-geo-alt-fill"></i>
                            <p>Endereço: Rua Pirapó, 514, 001 - Bairro Igara, Canoas – RS</p>
                            </div>
                        </a>
                       
                        <a href="tel:51980652808"
                        target="_blank"
                        rel='noopener noreferrer'>
                            <div className={styles.Isociais}>
                            <i class="bi bi-telephone-outbound-fill"></i>
                            <p>Telefone: (51) 98065-2808</p>
                            </div>
                        </a>
                        

                        <a href="#contato"                        
                        rel='noopener noreferrer'>
                            <div className={styles.Isociais}>
                            <i class="bi bi-envelope-paper-fill"></i>
                            <p>E-mail: gleiton.adm@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/gleiton/"
                        target="_blank"
                        rel='noopener noreferrer'>
                            <div className={styles.Isociais}>
                            <i class="bi bi-linkedin"></i>
                            <p>Linkedin: linkedin.com/in/gleiton/</p>
                            </div>
                        </a>


                        <a href="https://github.com/gleitons"
                        target="_blank"
                        rel='noopener noreferrer'>
                            <div className={styles.Isociais}>
                            <i class="bi bi-github"></i>
                            <p>GitHub: github.com/gleitons</p>
                            </div>
                        </a>

                        <a href="https://gleiton.com.br"
                        target="_blank"
                        rel='noopener noreferrer'>
                            <div className={styles.Isociais}>
                            <i class="bi bi-diagram-2-fill"></i>
                            <p>Site: gleiton.com.br</p>
                            </div>
                        </a>
                        <a href="https://goo.gl/maps/BL5Wk1CDyH4JVXGv5"
                        target="_blank"
                        rel='noopener noreferrer'>
                            <div className={styles.Isociais}>
                            <i class="bi bi-car-front-fill"></i>
                            <p>CNH(Carteira de Habilitação): A/B</p>
                            </div>
                        </a>
                        <a href="./imagens/Gleiton - gleiton.com.br - Curriculo.pdf"
                        target="_blank"
                        rel='noopener noreferrer'>
                            <div className={styles.Isociais}>
                            <i class="bi bi-cloud-download-fill"></i>
                            <p>Clique aqui para baixar este currículo</p>
                            </div>
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=5551980652808&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20Gleiton Soares."
                        target="_blank"
                        rel='noopener noreferrer'>
                            <div className={styles.stail}>
                            <i class="bi bi-whatsapp"></i>
                            <p>Estou Online Agora - Clique Aqui</p>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
        
        </>
        
    )
}
export default HeaderCurriculo;