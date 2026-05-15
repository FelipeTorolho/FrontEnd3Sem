import "./cadfruta.css"
import { useState } from "react"

function CadFruta() {
    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState(0)

    //array para cadastro de frutas
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi" , quantidade: 16},
        { id: 2, nome: "Melão", quantidade: 10 },
    ])


    function cadastrar(e) {
        e.preventDefault() //não deixa postar o formulario
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])

        setFruta("")
        setQuantidade(0)
    }

    return (
        <section className="sessao-cadastro">
            <h2>Cadastro</h2>
            <form action="" onSubmit={cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro-rotulo">
                        Digite o nome da fruta
                    </label>
                </fieldset>
                <input
                    type="text"
                    id="fruta"
                    placeholder="ex: limão"
                    className="cadastro__entrada"
                    value={fruta}
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                /> 
                <input
                    type="text"
                    id="fruta"
                    placeholder="ex: 12"
                    className="cadastro__entrada"
                     value={quantidade}
                    onChange={(e) => {
                        setQuantidade(e.target.value)
                    }}
                />
                <br />
                <button type="submit" className="cadastro__btncadastrar">Cadastrar</button>
            </form>

            <div className="resultados">
                <ul>
                    {
                        arrFrutas.map((f) => {
                            return( <li key={f.id}> 
                               Fruta: <strong>{f.nome}</strong> |
                               Quantidade: <strong>{f.quantidade}</strong>
                               </li>
                            )
                        })
                    }

                </ul>
            </div>
        </section>
    )
}

export default CadFruta