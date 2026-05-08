import "./perfil.css"

function Perfil({nome, idade, profissao}){
    return(
        <p>{nome} | {idade} | {profissao}</p>
    )
}

export default Perfil