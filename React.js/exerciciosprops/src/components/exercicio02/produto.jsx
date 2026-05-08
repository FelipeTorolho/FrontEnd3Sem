import "./produto.css"

export default function Produto() {
    const produtos = [
        {
            nome: "Tênis de marca",
            preco: 550,
            descricao: "tênis chique!!!"
        },
        {
            nome: "Cameseta de marca",
            preco: 270,
            descricao: "Camiseta chique e confortavel!!"
        }
    ]

    return (
        produtos.map((produtinho) => {
            return (
            <Produto
                nome={produtinho.nome}
                preco={produtinho.preco}
                descricao={produtinho.descricao}
            />
          )
        })
    )
}