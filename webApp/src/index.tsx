import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Header from "./components/pages/header/header";
import CadastroPet from "./components/pages/cadastros/cadastroPet";
import CadastroPrestador from "./components/pages/cadastros/cadastroPrestador";
import CadastroTutor from "./components/pages/cadastros/cadastroTutor";
import DadosTutor from "./components/pages/dados/dadosTutor";
import PrestadoPag from "./components/pages/prestador/pagPrestador";
import PerfilPrestador from "./components/pages/perfis/perfilPrestador";
import PerfilTutor from "./components/pages/perfis/perfilTutor";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastro" element={<CadastroTutor />} />
        <Route path="/cadastropet" element={<CadastroPet />} />
        <Route path="/cadastroprestador" element={<CadastroPrestador />} />
        <Route path="/cadastrotutor" element={<CadastroTutor />} />
        <Route path="/dadostutor" element={<DadosTutor />} />
        <Route path="/pagprestador" element={<PrestadoPag />} />
        <Route path="/perfilprestador" element={<PerfilPrestador />} />
        <Route path="/perfiltutor" element={<PerfilTutor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
