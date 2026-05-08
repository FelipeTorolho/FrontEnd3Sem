import "./chamado.css"

function Chamado({nome, plataforma, preco, imagem})
{
    return(
         <div>
            <img src={imagem}  alt={nome} className="jogo-img" />
            <h1>{nome}</h1>
            <h2>{plataforma}</h2>
            <p>{preco}</p>
         </div>
    )
}

export default Chamado