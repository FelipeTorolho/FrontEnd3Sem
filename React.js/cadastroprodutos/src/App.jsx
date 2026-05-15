
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CadastroFrutasPage from './pages/cadastrofruta/cadastrofrutapage'
import CadastroProdutosPage from './pages/cadastroproduto/cadastroprodutopage'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import Header from './components/hearder/header'



export default function App() {
  return (

    <BrowserRouter>
    <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<QuemSomosPage />} path="/quemsomos" />
        <Route element={<CadastroFrutasPage />} path="/frutas" />
        <Route element={<CadastroProdutosPage />} path="/produtos" />
      </Routes>
    </BrowserRouter>


  )
}

