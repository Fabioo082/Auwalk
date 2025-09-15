import React from "react";
import "./components/pages/global.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/pages/Home";
import Header from "./components/pages/header";
import CadastroPet from "./components/pages/cadastroPet";
import CadastroPrestador from "./components/pages/cadastroPrestador";
import CadastroTutor from "./components/pages/cadastroTutor";
import DadosTutor from "./components/pages/dadosTutor";
import PrestadoPag from "./components/pages/pagPrestador";
import PerfilPrestador from "./components/pages/perfilPrestador";
import PerfilTutor from "./components/pages/perfilTutor";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cadastropet' element={<CadastroPet />}/>
        <Route path='/cadastroprestador' element={<CadastroPrestador />} />
        <Route path='/cadastrotutor' element={<CadastroTutor />}/>
        <Route path="/dadostutor" element={<DadosTutor/>} />
        <Route path="/pagprestador" element={<PrestadoPag/>}/>
        <Route path="/perfilprestador" element={<PerfilPrestador />}/>
        <Route path='/perfiltutor' element={<PerfilTutor />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
