import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Produto from "./components/produto/produto";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App