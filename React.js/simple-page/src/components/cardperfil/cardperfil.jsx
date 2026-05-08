import "./cardperfil.css"
import MyPeople from "../../assets/c-e1718858610992.jpg"

function CardPerfil(){
    return (
         <div ClassName="card-perfil">
                <img className="card-perfil__image" src={MyPeople} alt="imagem do usuario"/>
        </div>
    )
}

export default CardPerfil;