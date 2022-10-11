import styles from './Styles/Objetivo.module.css'

const Objetivo = () => {
    const raimundo = "./imagens/escola-raimundo-nonato-da-fonseca-lagoa-dos-patos-mg.png"
    const icaUFMG = "./imagens/ica-ufmg.png"
    const ipr = "./imagens/instituto-padre-reus-logo-gleiton-aparecido-soares-de-souza.png"
    const bg = "./imagens/logo-brasil-gondolas-gleiton-aparecido-soares-de-souza.png"
    const hd = "./imagens/hd-produtos-digitais.png"
    const doceneira = "./imagens/doceneira.png"
    const gleiton = "Gleiton Aparecido Soares de Souza"
    const projetoP = "./imagens/projeto-portofolio.png"
    return (
        
        <div className={styles.corpoDesc}>
            <h2>OBJETIVO</h2>
            <div className="topicoDiv">
                <p className={styles.pDesc}>Objetivo de atuação na área de TI (Tecnologia da Informação), administrativa, financeira, ou contábil, desenvolvendo e agregando conhecimento de todas as habilidades adquiridas ao longo de minha jornada profissional. Sempre disposto a receber conhecimento da organização que eu venha a me ingressar. Tenho interesse de construir uma carreira de sucesso, dessa forma contribuir para que a empresa alcance seus objetivos através do meu trabalho.</p>
            </div>


            <h2>FORMAÇÃO</h2>

            <div className='topicoDiv'>
                <div className='flex'>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEV0X_nGAbyrQ/company-logo_100_100/0/1575292768696?e=1673481600&v=beta&t=SQm_cpgyPYWvfx1bJslCnKxGDxuh4F8JqmKnZqui0Y4" alt="" />
                    <h3>Engenharia de Software - Cruzeiro do Sul Virtual</h3>
                </div>
                <p className={styles.periodo}><strong>CURSANDO</strong> - Bacharelado em Engenharia, Engenharia de Software · (setembro de
                2022 - setembro de 2026)</p>
                <p className={styles.pDesc}>O curso de Engenharia de Software prepara profissionais focados no desenvolvimento de novos programas de computador.</p>
            </div>

            <div className='topicoDiv'>
                <div className='flex'>
                    <img src="./imagens/senac-mg.png" alt="" />
                    <h3>Programador Web - SENAC/MG</h3>
                </div>
                <p className={styles.periodo}>Curso Programador Web, realizado no período de 01/02/2022 a 21/07/2022 na cidade de Sete Lagoas-MG.</p>
                <p className={styles.pDesc}>Conteúdo 01- Desenvolver aplicações web 02- Publicar e testar aplicações web 03- Realizar manutenção nas funcionalidades das aplicações web 04- Projeto Integrador Programador Web.</p>
            </div>

            <div className='topicoDiv'>
                <div className='flex'>
                    <img src="./imagens/senac-mg.png" alt="" />
                    <h3>Representante Comercial - SENAC/MG</h3>
                </div>
                <p className={styles.periodo}>Curso Representante Comercial, realizado no período de 01/02/2022 à 31/03/2022 na cidade de Uberlândia-MG.</p>
                <p className={styles.pDesc}>O Representante Comercial é responsável por realizar prospecção de clientes, negociação e vendas externas de produtos e serviços.</p>
            </div>    


             <div className='topicoDiv'>
                <div className='flex'>
                    <img src="https://media-exp1.licdn.com/dms/image/C510BAQGUy0hSknH6bw/company-logo_100_100/0/1519871823751?e=1673481600&v=beta&t=UMLL-jOCDHKPl8J-xY2dvhNx51fwySLYauGvmsA3lBY" alt="" />
                    <h3>Técnico em Informática para Internet - IFNMG - Instituto Federal de Educação Ciência e Tecnologia de Minas Gerais</h3>
                </div>
                <p className={styles.periodo}>Técnico em Informática para Internet Tecnologia em Informática/Software 2017 - 2018</p>
                <p className={styles.pDesc}>Desenvolve programas de computador para internet, seguindo as especificações e paradigmas da lógica de programação e das linguagens de programação. Utiliza ferramentas de desenvolvimento de sistemas, para construir soluções que auxiliam o processo de criação de interfaces e aplicativos empregados no comércio e marketing eletrônicos. Desenvolve e realiza a manutenção de sites e portais na internet e na intranet.</p>
            </div>   

             <div className='topicoDiv'>
                <div className='flex'>
                    <img src="./imagens/facit-femc-gleiton-aparecido-soares-de-souza.png" alt="" />
                    <h3>Engenharia de Computação - FACIT/FEMC</h3>
                </div>
                <p className={styles.periodo}>Curso Superior de Tecnologia (CST)Engenharia de Computação</p>
                <p className={styles.pDesc}><strong>Não concluído 2013 - 2015</strong> / O curso de Engenharia de Computação habilita a pessoa para trabalhar com o desenvolvimento e planejamento de softwares e hardwares.</p>
            </div>  
            
            <div className='topicoDiv'>
                <div className='flex'>
                    <img src={ipr} alt={ipr} />
                    <h3>Montagem e Manutenção de Computadores - UNISC/IPR</h3>
                </div>
                <p className={styles.periodo}>Montagem e Manutenção de Computadores - UNISC(Universidade de Santa Cruz do Sul)/IPR (Instituto Padre Reus) - 1/2011 – 07/2011</p>
                <p className={styles.pDesc}>Montagem, configuração e manutenção de hardware de computadores. Além de cuidados no manuseio e utilização de peças e equipamentos de informática, instalação e configuração dos diversos componentes de um microcomputador, seus periféricos e dos dispositivos auxiliares utilizados na computação.</p>
            </div>       
             
             <div className='topicoDiv'>
                <div className='flex'>
                    <img src={raimundo} alt={raimundo} />
                    <h3>Ensino Médio Completo - Escola Estadual Raimundo Nonato da Fonseca</h3>
                </div>
                <p className={styles.periodo}>1/2005 – 12/2007</p>
                <p className={styles.pDesc}>Conclusão do Ensino médio do ensino Básico - Escola pública</p>
            </div>                       


            <div className='topicoDiv'>
                <div className='flex'>
                    <img src={icaUFMG} alt={icaUFMG} />
                    <h3>Técnico em Agropecuário - ICA/UFMG</h3>
                </div>
                <p className={styles.periodo}>Técnico em Agropecuário - ICA/UFMG - Núcleo Montes Claros - MG - 1/2005 – 12/2006</p>
                <p className={styles.pDesc}><strong>*Falta Estágio</strong> - Planejar, executar, acompanhar e fiscalizar projetos agropecuários, administrar propriedades rurais, realizar levantamentos topográficos, elaborar e monitorar programas preventivos de sanitização da produção animal, vegetal e agroindustrial e atuar em programas de assistência técnica, extensão rural e pesquisa são algumas das responsabilidades do profissional formado em Agropecuária.</p>
            </div>       



            
           

            <h2>EXPERIÊNCIAS PROFISSIONAIS</h2>
            
            <div className='topicoDivE'>
                <div className='flex'>
                    <img src={bg} alt={bg} />
                    <h3>Brasil Gôndolas LTDA</h3>
                </div>
                <p className={styles.periodo}>Brasil Gôndolas LTDA - Maio de 2022 – até o Outubro - 5 meses / 
            Canoas - Rio Grande do Sul</p>
                <p className={styles.pDesc}>Atuando na área administrativa de folha de pagamento, compra, venda, contato com fornecedores, contratos, alvarás, criação de planilhas para facilitar controles internos como estoque interno, estoque em centro de distribuição.
            Captação de clientes através de loja online e-commerce, cobranças, retornos.
            Facilidade de utilização de sistema terceirizado qualquer que seja ou uso necessário para uso da empresa.</p>
            </div>       


            <div className='topicoDivE'>
                <div className='flex'>
                    <img src="./imagens/brasao-lagoa-dos-patos-mg.png" alt='public/imagens/brasao-lagoa-dos-patos-mg.png' />
                    <h3>Agente de Desenvolvimento Econômico - Prefeitura Municipal de Lagoa dos Patos - MG</h3>
                </div>
                <p className={styles.periodo}>Agente de Desenvolvimento Econômico  - Jun. de 2017 – até Maio de 2022 - 5 anos, 
            Lagoa dos Patos, Minas Gerais, Brasil</p>
                <p className={styles.pDesc}>O agente de desenvolvimento foi criado para auxiliar o processo de implementação e continuidade dos programas e projetos contidos na Lei Geral das Micro e Pequenas Empresas. Desempenhar um papel importante de coordenação e continuidade das atividades para desenvolvimento sustentável do município, juntamente com o poder público municipal e as lideranças do setor privado local.
            Executar e articular as políticas para implementação da Lei Geral das Micro e Pequenas Empresas no Município e criar uma articulação e mobilização na cidade em torno da causa do desenvolvimento local. Técnicas para moderação de grupos, negociação e solução de conflitos, elaboração e gestão de projetos, articulação, captação de recursos.</p>
            </div>       
            

            <div className='topicoDivE'>
                <div className='flex'>
                <img src="./imagens/brasao-lagoa-dos-patos-mg.png" alt='public/imagens/brasao-lagoa-dos-patos-mg.png' />
                    <h3>SEBRAE - Sala Mineira do Empreendedor de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>Atendimento ao Cliente - Sala Mineira do Empreendedor em Lagoa dos Patos MG</p>
                <p className={styles.pDesc}>Atendimento ao público MEI, ME, EPP, emissão de alvará, Emissão de notas fiscais, envio de documentos, cobranças de DAS ́N do simples nacional, organização dos deveres do MEI. Palestras educativas para o microempreendedor local. Atuando lado a lado com as administrações municipais, oferecendo apoio para empreendimentos de todos os portes.
            <strong>Trabalho executado juntamente com o de Agente de Desenvolvimento</strong></p>
            </div>       
            


            <div className='topicoDivE'>
                <div className='flex'>
                    <img src={hd} alt={hd} />
                    <h3>Gerente Comercial - HD Produtos Digitais</h3>
                </div>
                <p className={styles.periodo}>HD Produtos Digitais 26300217000100</p>
                <p className={styles.pDesc}>Marketing Digital
                Criação de Sites
                Redes Sociais
                Vendas Online
                Atendimento ao Cliente
                Estratégias de Marketing para aumentar Vendas online. Vários projetos Online.</p>
                </div>    
            
            <div className='topicoDivE'>
                <div className='flex'>
                <img src="./imagens/brasao-lagoa-dos-patos-mg.png" alt='public/imagens/brasao-lagoa-dos-patos-mg.png' />
                    <h3>Agente administrativo Fazendário - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>Abr. de 2016 - jun. de 2017 - 1 ano 3 meses</p>
                <p className={styles.pDesc}>Lagoa dos Patos, Minas Gerais, Brasil
            Executar serviços relacionado a fazenda Municipal, orientar e esclarecer os contribuintes quanto ao cumprimento das obrigações legais referentes ao pagamento de tributos, com o objetivo de evitar a sonegação.</p>
            </div>  


            <div className='topicoDivE'>
                <div className='flex'>
                <img src="./imagens/brasao-lagoa-dos-patos-mg.png" alt='public/imagens/brasao-lagoa-dos-patos-mg.png' />
                    <h3>Cadastro Imobiliário - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>Abr. de 2016 - jun. de 2017 - 1 ano 3 meses - Juntamente com o Agente Administrativo Fazendário</p>
                <p className={styles.pDesc}>Gerenciamento de cadastro, alteração e
            baixa de imóveis, desmembramento e e regularização fundiária no município de Lagoa dos Patos MG.</p>
            </div>  
            
            <div className='topicoDivE'>
                <div className='flex'>
                <img src="./imagens/brasao-lagoa-dos-patos-mg.png" alt='public/imagens/brasao-lagoa-dos-patos-mg.png' />
                    <h3>Gerente Patrimonial - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>jan. de 2015 - mar. de 2016 - 1 ano 3 meses - Lagoa dos Patos, Minas Gerais, Brasil</p>
                <p className={styles.pDesc}>Cadastro, conferência, exclusão e organização de itens do património público. Etiquetagem, alteração e movimentação de património.</p>
            </div>  
            

            {/* <div className='topicoDivE'>
                <div className='flex'>
                <img src="./imagens/brasao-lagoa-dos-patos-mg.png" alt='public/imagens/brasao-lagoa-dos-patos-mg.png' />
                    <h3>Gerente Patrimonial - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>jan. de 2015 - mar. de 2016 - 1 ano 3 meses - Lagoa dos Patos, Minas Gerais, Brasil</p>
                <p className={styles.pDesc}>Cadastro, conferência, exclusão e organização de itens do património público. Etiquetagem, alteração e movimentação de património.</p>
            </div>   */}
            

            <div className='topicoDivE'>
                <div className='flex'>
                <img src="./imagens/brasao-lagoa-dos-patos-mg.png" alt='public/imagens/brasao-lagoa-dos-patos-mg.png' />
                    <h3>Gerente de operações de almoxarifado - Prefeitura de Lagoa dos Patos MG</h3>
                </div>
                <p className={styles.periodo}>set. de
            2014 - mar. de 2016 - 1 ano 7 meses - Lagoa dos Patos, Minas Gerais, Brasil</p>
                <p className={styles.pDesc}>Atuando na área de cadastro, baixa, conferência e entrega de produtos em estoque</p>
            </div>  


            <div className='topicoDivE'>
                <div className='flex'>
                    <img src={doceneira} alt={doceneira} />
                    <h3>Gerente de vendas e estoque / Ramo de Alimentos - Doceneira e Alimentos LTDA</h3>
                </div>
                <p className={styles.periodo}>04/2009 - 08/2013 - Comercial Doceneira e Alimentos LTDA</p>
                <p className={styles.pDesc}>Gerenciava estoques, entrega, controle de validade e qualidade. Atendimento ao cliente e levantamento de dados para aprimorar lucros.</p>
            </div>  
            

            
            {/* <div className='topicoDivE'>
                <div className='flex'>
                    <img src={bg} alt={bg} />
                    <h3>Gerente de vendas e estoque / Ramo de Alimentos - Doceneira e Alimentos LTDA</h3>
                </div>
                <p className={styles.periodo}>04/2009 - 08/2013 - Comercial Doceneira e Alimentos LTDA</p>
                <p className={styles.pDesc}>Gerenciava estoques, entrega, controle de validade e qualidade. Atendimento ao cliente e levantamento de dados para aprimorar lucros.</p>
            </div>   */}
            


            <h2>LICENÇAS E CERTIFICADOS</h2>


            <div className='topicoDivD'>
                <div className='flex'>
                    <img src="./imagens/html-css-javascript.png" alt={gleiton} />
                    <h3>Programação HTML, CSS, Javascript</h3>
                </div>
                <p className={styles.periodo}>Auto didata - cursos referidos</p>
                <p className={styles.pDesc}>Criação de Sites responsivos, domínio front-end.(conhecimento Médio) Javascript MasterClass.</p>
            </div>  



            <div className='topicoDivD'>
                <div className='flex'>
                    <img src='./imagens/fundacao-bradesco.png' alt="" />
                    <h3>MICROSOFT OFFICE 365 - CONHECENDO O ONEDRIVE</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 

            <div className='topicoDivD'>
                <div className='flex'>
                <img src='./imagens/fundacao-bradesco.png' alt="" />
                    <h3>MICROSOFT OFFICE 365 - CONHECENDO O ONENOTE</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 


            <div className='topicoDivD'>
                <div className='flex'>
                <img src='./imagens/fundacao-bradesco.png' alt="" />
                    <h3>MICROSOFT OFFICE 365 - CONHECENDO O PLANNER</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 


            <div className='topicoDivD'>
                <div className='flex'>
                <img src='./imagens/fundacao-bradesco.png' alt="" />
                    <h3>MICROSOFT OFFICE 365 - CONHECENDO O TEAMS</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 


            <div className='topicoDivD'>
                <div className='flex'>
                <img src='./imagens/fundacao-bradesco.png' alt="" />
                    <h3>MICROSOFT OFFICE 365 - CONHECENDO O OUTLOOK</h3>
                </div>
                <p className={styles.periodo}>Fundação Bradesco - Emitido em ago. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 


            <div className='topicoDivD'>
                <div className='flex'>
                <img src='./imagens/fundacao-bradesco.png' alt="" />
                    <h3>Curso de Pregoeiro para Licitação</h3>
                </div>
                <p className={styles.periodo}>Bolsa Nacional de Compras Emitido em jul. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 
            
            <div className='topicoDivD'>
                <div className='flex'>
                    <img src='./imagens/mupi-systems.jpeg' alt="" />
                    <h3>Fórum: Regularização Fundiária Urbana - Reurb e o desenvolvimento das cidades</h3>
                </div>
                <p className={styles.periodo}>Mupi Systems - Emitido em jun. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 


            <div className='topicoDivD'>
                <div className='flex'>
                    <img src='./imagens/mupi-systems.jpeg' alt="" />
                    <h3>SEGURANÇA DA INFORMAÇÃO</h3>
                </div>
                <p className={styles.periodo}>Mupi Systems - Emitido em jun. de 2021</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 
          
            

            <div className='topicoDivD'>
                <div className='flex'>
                    <img src='./imagens/udemy.png' alt="" />
                    <h3>Blog automatico - ganhar dinheiro online marketing digital</h3>
                </div>
                <p className={styles.periodo}>Udemy - Emitido em dez. de 2020</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 
            
            <div className='topicoDivD'>
                <div className='flex'>
                <img src='./imagens/udemy.png' alt="" />
                    <h3>Curso Completo de Instagram Marketing</h3>
                </div>
                <p className={styles.periodo}>Udemy - Emitido em nov. de 2018</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 
            

            <div className='topicoDivD'>
                <div className='flex'>
                    <img src='./imagens/udemy.png' alt="" />
                    <h3>SEO WordPress: Como aparecer no Google</h3>
                </div>
                <p className={styles.periodo}>Udemy - Emitido em nov. de 2018</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 

            <div className='topicoDivD'>
                <div className='flex'>
                    <img src='./imagens/sebrae.png' alt="" />
                    <h3>Curso de agente de Desenvolvimento Avançado</h3>
                </div>
                <p className={styles.periodo}>Sebrae - Emitido em mai. de 2017</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 
        
            

            <div className='topicoDivD'>
                <div className='flex'>
                <img src='./imagens/sebrae.png' alt="" />
                    <h3>Curso de agente de Desenvolvimento Básico</h3>
                </div>
                <p className={styles.periodo}>Sebrae - Emitido em mai. de 2017</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 



            <div className='topicoDivD'>
                <div className='flex'>
                    <img src='./imagens/ebape.png' alt="" />
                    
                    <h3>Certificado Aprovação Fundiária - EBAP - Escola Brasileira de Administração Pública</h3>
                </div>
                <p className={styles.periodo}>EBAP - Escola Brasileira de Administração Pública Emitido em mar. de 2017</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 

            <div className='topicoDivD'>
                <div className='flex'>
                <img src="./imagens/facit-femc-gleiton-aparecido-soares-de-souza.png" alt="" />
                    <h3>I Encontro de Pesquisa em ciências e tecnologia Facit</h3>
                </div>
                <p className={styles.periodo}>Faculdade de Ciência e Tecnologia de Montes Claros - FACIT - Emitido em out. de 2015</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 


            <div className='topicoDivD'>
                <div className='flex'>
                <img src="./imagens/facit-femc-gleiton-aparecido-soares-de-souza.png" alt="" />
                    <h3>III Forum das Engenharias 2015</h3>
                </div>
                <p className={styles.periodo}>Crea Jr-MG Núcleo Montes Claros - Emitido em ago. de 2015</p>
                <p className={styles.pDesc}>Cursos Livres.</p>
            </div> 




            <h2>PUBLICAÇÕES</h2>

            <div className='topicoDivD'>
            <div className='flex'>
            <img src='./imagens/sebrae.png' alt="" />
                <h3>Agente de Desenvolvimento inaugura Sala Mineira do Empreendedor em Lagoa dos Patos MG</h3>
            </div>
            <a href="http://www.se.agenciasebrae.com.br/sites/asn/uf/MG/inaugurada-sala-mineira-do-empreendedor-em-lagoa-dos-patos,c84273a0523e2610VgnVCM1000004c00210aRCRD"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://sebrae.com.br</p>
            </a>
            <p className={styles.pDesc}>Sebrae 20 de abril de 2018 - Inaugurada Sala Mineira do Empreendedor em Lagoa dos Patos...</p>
        </div>  

            
            

            <h2>PROJETOS E PORTFÓLIOS</h2>


        <div className='topicoDivD'>
            <div className='flex'>
                <img src={projetoP} alt={projetoP} />
                <h3>Sala Mineira do Empreendedor</h3>
            </div>
            <a href="https://salamineira.com"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://salamineira.com</p>
            </a>
            <p className={styles.pDesc}>A Sala Mineira do Empreendedor, fruto de uma parceria entre JUCEMG, SEBRAE e municípios mineiros...</p>
        </div>  

        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>Naturfive</h3>
            </div>
            <a href="https://naturfive.com"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://naturfive.com</p>
            </a>
            <p className={styles.pDesc}>Desde 2020 somos Consultora Natura com muito orgulho e confiança!
    Tanto que em 2021 investimos tudo no site Naturfive Cosméticos para vender on-line todos os produtos Natura, com maior...</p>
        </div>  

        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>Ó as Zidéia!</h3>
            </div>
            <a href="https://gleitons.github.io/sou-tim/index.html"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://oaszideia.com</p>
            </a>
            <p className={styles.pDesc}>Memes aleatoriamente - Clique na imagem e coloque aleatoriamente...</p>
        </div>  

        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>httpst.net</h3>
            </div>
            <a href="https://httpst.net"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://httpst.net</p>
            </a>
            <p className={styles.pDesc}>Memes aleatoriamente - Clique na imagem e coloque aleatoriamente...</p>
        </div>  

        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>seusiteonline.com</h3>
            </div>
            <a href="https://httpst.net"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://seusiteonline.com</p>
            </a>
            <p className={styles.pDesc}>Seusiteonline.com é uma empresa familiar independente de criação de sites com sede em Minas Gerais, Brasil, em uma pequena cidade no Norte de Minas....</p>
        </div>  

        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>megadehoje.com</h3>
            </div>
            <a href="https://httpst.net"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://megadehoje.com</p>
            </a>
            <p className={styles.pDesc}>Somos um site com notícias, informações e dicas de como ganhar na mega-sena. Criado em 2018 o megadehoje.com te informa os últimos sorteios e premiações que...</p>
        </div>  

                    
        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>veraoshop.com</h3>
            </div>
            <a href="https://veraoshop.com"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://veraoshop.com</p>
            </a>
            <p className={styles.pDesc}>O verão Shop Online está revolucionando o mercado de vestuário, mais especificamente de tênis. A mais de 05 anos no mercado calçadista vendendo produtos de qualidade e sempre com o menor preço e na internet temos loja virtual desde 2018...</p>
        </div>  

        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>alexbebidas.com.br/</h3>
            </div>
            <a href="https://veraoshop.com"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://www.alexbebidas.com.br/</p>
            </a>
            <p className={styles.pDesc}>Venda de bebidas online...</p>
        </div>  

        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>alexbebidas.com.br/</h3>
            </div>
            <a href="https://www.alexbebidas.com.br/"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://www.alexbebidas.com.br/</p>
            </a>
            <p className={styles.pDesc}>Venda de bebidas online...</p>
        </div>  

        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>alexbrasil.com.br/</h3>
            </div>
            <a href="https://www.alexbrasil.com.br/"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://www.alexbrasil.com.br/</p>
            </a>
            <p className={styles.pDesc}>Alex Brasil a mais de 10 anos no mercado de prateleiras e gôndolas de aço...</p>
        </div>  


        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>allesestofados.com.br</h3>
            </div>
            <a href="https://allesestofados.com.br"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://www.allesestofados.com.br</p>
            </a>
            <p className={styles.pDesc}>Alles Estofados em Rio grande do Sul...</p>
        </div>  


        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>asconstrutora.com.br</h3>
            </div>
            <a href="https://asconstrutora.com.br"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://asconstrutora.com.br</p>
            </a>
            <p className={styles.pDesc}>AS Construtora é uma empresa familiar que está no mercado a mais de 05 anos, nossos profissionais tem mais mais de 12 anos de experiência na área de construção...</p>
        </div>  

        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>ferragemdoxandi.com.br</h3>
            </div>
            <a href="https://ferragemdoxandi.com.br"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>https://ferragemdoxandi.com.br</p>
            </a>
            <p className={styles.pDesc}>Ferragem do Xandi - FERRAGENS (RETALHO), Novo Hamburgo, 93530, Rua Pastor Gustavo Nordlund 337, TEL: 5195458...</p>
        </div>  
        
        <div className='topicoDivD'>
            <div className='flex'>
            <img src={projetoP} alt={projetoP} />
                <h3>gondoladeaco.com.br/</h3>
            </div>
            <a href="http://gondoladeaco.com.br"
            target="_blank"
            rel='noopener noreferrer'>
                <p className={styles.periodo}>http://gondoladeaco.com.br/</p>
            </a>
            <p className={styles.pDesc}>Gôndolas de Aço e Expositores para Lojas e Supermercados, Porta Pallets, móveis de aço, máquinas e equipamentos para estabelecimentos comerciais em Canoas...</p>
        </div> 


        
       
        
        


        </div>
    )
}
export default Objetivo;