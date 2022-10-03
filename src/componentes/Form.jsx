function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(23)
    }
    return (
        <>
        <h2>Cadastro de formulário</h2>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" name="nome" id="nome" />
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>

        </form>
        </>
       
    )
}
export default Form;