
import './App.css'
import Saudacao from './components/exercicio01/saudacao'
import Produto from './components/exercicio02/produto'
import Perfil from './components/exercicio03/perfil'
import Botao from './components/exercicio04/botao'
import Filme from './components/exercicio05/filme'
import Aluno from './components/exercicio06/aluno'
import MyChildren from './components/exercicio07/mychildren'
import Contato from './components/exercicio08/contato'
import Chamado from './components/exercicio09/chamado'
import Title from './components/title/title'


function App() {
  return (
    // <>
    // <Title texto="Felipe" sobrenome="Torolho" idade={16}/>
    // <Title texto="Gustavo" sobrenome="Costa" idade={17}/>
    // <Title texto="Matheus" sobrenome="Becker" idade={17}/>
    // </>

    // <>
    // <Saudacao nome="Felipe"/>
    // <Saudacao nome="Gustavo"/>
    // <Saudacao nome="Matheus"/>
    // </>

    <>
     <Produto/>
    </>

    // <Perfil nome="Felipe" idade={16} profissao="Desenvolvedor de sistemas"/>

    // <>
    // <Botao texto="Cadastrar" cor="blue"/>
    // </>

    // <>
    // <Filme titulo="planeta dos macacos" ano={2001} genero="ficção científica" nota={8.92}/>
    // <Filme titulo="planeta dos macacos" ano={2001} genero="ficção científica" nota={8.92}/>
    // <Filme titulo="planeta dos macacos" ano={2001} genero="ficção científica" nota={8.92}/>
    // </>

    // <Aluno
    //   nome="Felipe"
    //   curso="Desenvolvimento de Sistemas"
    //   imagem="../../assets/hero.png"
    // />

    // <MyChildren>
    //   <Produto
    //    nome="Tenis Nike"
    //    preco={220.90}
    //    descricao="Tenis da Nike"
    //   />
    // </MyChildren>

    // <>
    //   <Contato nome="Felipe" telefone="11987654321" email="felipe@example.com" />
    //   <Contato nome="Felipe" telefone="11987654321" email="felipe@example.com" />
    //   <Contato nome="Felipe" telefone="11987654321" email="felipe@example.com" />
    //   <Contato nome="Felipe" telefone="11987654321" email="felipe@example.com" />
    //   <Contato nome="Felipe" telefone="11987654321" email="felipe@example.com" />
    // </>

    // <Chamado nome="EA FC" plataforma="console" preco={499.90} imagem=""/>
  )
}

export default App
