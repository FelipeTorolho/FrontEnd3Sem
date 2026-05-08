import "./contato.css"

function Contato({ nome, telefone, email }) {
    return (
            <p>{nome}, {telefone}, {email}</p>
        )
}

export default Contato