import "./filme.css"

function Filme({titulo, ano, genero, nota}){
    return(
        <div>
            <h1>
            <span>{titulo}</span>
            <span>{ano}</span>
            <span>{genero}</span>
            <span>{nota}</span>
            </h1>
        </div>
    )
}

export default Filme