import "./produto.css"
import { useState, useEffect } from "react"
import img from '../../assets/image.jpg'

export default function Produto() {
    // states e variáveis
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    const [editar, setEditar] = useState(false)

    const [arrProdutos, setArrProdutos] = useState([])

    // ciclo de vida e funções
    async function cadastrarProduto(e) {
        e.preventDefault()// para evitar que a página seja recarregada

        // validar o formulario
        if (
            nome.trim().length == 0 || descricao.trim().length == 0 ||
            isNaN(preco) || isNaN(quantidade)
        ) {
            alert("Preencha os campos corretamente!")
            return false;
        }

        //gerar um objeto que vai pra api 
        // object short sintaxe
        const objCadastro = {
            nome,
            preco,
            descricao: descricao,
            quantidade: quantidade,
            imagem: "image.jpg"
        }
        console.log(objCadastro);

        //cadastrar na api
        //gerar o fetch para faer o post
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                body: JSON.stringify(objCadastro),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
            })

            // validando o retorno da API
            console.log(retornoAPI);
            if (retornoAPI.status == 201) {
                const dadosCadastrados = retornoAPI.json()
                setArrProdutos([...arrProdutos, dadosCadastrados])
                alert("Produto cadastrado com sucesso")
                limparFormulario() // limpar o formulário
            } else {
                alert("Problema inesperado")
            }

        } catch (error) {
            alert("Não foi possível salvar os dados")
            console.log(error);

        }
    }

    // Função que reinicia os states pra limpar o formulário
    function limparFormulario() {
        setNome("")
        setDescricao("")
        setQuantidade(0)
        setPreco(0)

    }

    // ciclo de vida do componente
    useEffect(() => {
        getProdutos()
    }, [])

    async function getProdutos() {
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos")
            const dados = await retornoAPI.json()
            console.log(dados);
            setArrProdutos(dados)

        } catch (error) {
            console.log("Erro ao buscar os produtos");
            console.log(error);


        }
    }

    async function deletar(id) {
        try {
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
                method: "DELETE"
            })

            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                alert("Produto deletado com sucesso")

                // gerar uma nova lista com os produtos que sobraram
                const novaLista = arrProdutos.filter((prod) => { return prod.id != id })
                setArrProdutos(novaLista)
            } else {
                alert("Algum erro ocorreu ao apagar")
            }

        } catch (error) {
            alert("Erro ao apagar o produto")
            console.log(error);
        }
    }

    async function editarProduto(e) {
        e.preventDefault()
        alert("Função Editar Chamada")

        // fazer o put pra editar os dados
       try {
        const objEditado = {
            nome,
            preco,
            descricao,
            quantidade
        }

        const retornoAPI = await fetch(`http://localhost:3000/produtos/${idProduto}`, {
            method: "PUT",
            body: JSON.stringify(objEditado),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
        })

        if (retornoAPI.status == 200) {
            alert("Produto editado com sucesso")

            
        } else {
            alert("Erro ao editar o produto")
        }

       } catch (error) {
        alert("Erro ao editar o produto")
        console.log(error);
       }
        // chamar a função de getDados novamente para mostrar os dados atualizados
    }

    // desenho do componente na tela em si
    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--branco" >SENAI</h1>
                <h1 className="titulo--azul">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={(editar) ? editarProduto : cadastrarProduto}>
                {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                    <input className="input--metade" value={nome} type="text" id="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                    <input className="input--metade" value={preco} type="number" id="preco" placeholder="Preço" onChange={(e) => setPreco(parseFloat(e.target.value))} />
                    <input className="input--metade" value={quantidade} type="number" id="quantidade" placeholder="Quantidade" onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                    <input className="input--metade" value={descricao} type="text" id="descricao" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} />
                </div>

                {editar && <button
                    type="button"
                    className="btn--cadastro"
                    onClick={() => {
                        setEditar(false); // faz esconder o botão
                        limparFormulario()// reseta os states dos inputs
                    }}

                >
                    Cancelar
                </button>} {""}
                <button type="submit" className="btn--cadastro">Adicionar Produto</button>
            </form>


            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <p>Preço: R$ {prod.preco.toFixed(2)}</p>
                        <p>Descrição: {prod.descricao}</p>
                        <p>Quantidade: {prod.quantidade}</p>

                        <a href="" onClick={(e) => {
                            e.preventDefault()
                            deletar(prod.id)
                        }}>Apagar</a>

                        <a href="" onClick={(e) => {
                            e.preventDefault()
                            // mostra os dados no form pra edição

                            setEditar(true)
                            setNome(prod.nome)
                            setDescricao(prod.descricao)
                            setPreco(prod.preco)
                            setQuantidade(prod.quantidade)
                        }}>Editar</a>

                        <img src={img} alt={prod.nome} />
                    </div>
                ))}
            </section>
        </>

    )
}