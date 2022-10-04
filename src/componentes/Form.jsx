import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(`O usuario ${name} foi cadastrado com a senha ${password}`)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return (
        <>
        <h2>Cadastro de formulário</h2>
        <form onSubmit={cadastrarUsuario}>
            <h3>Meu cadastro</h3>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="nome" placeholder="Digite seu nome" id="nome" 
                value={name}
                onChange={(e) => setName (e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="text" name="password" placeholder="Digite sua senha" id="password" 
                
                onChange={(e) => setPassword (e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>

        </form>
        </>
       
    )
}
export default Form;