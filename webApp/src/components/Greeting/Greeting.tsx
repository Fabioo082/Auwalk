import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroTutor from "./components/pages/cadastroTutor";
import PerfilTutor from "./components/pages/perfilTutor";
import PerfilPrestador from "./components/pages/perfilPrestador";
import CadastroPrestador from "./components/pages/cadastroPrestador";
import CadastroPet from "./components/pages/cadastroPet";
import PrestadoPag from "./components/pages/pagPrestador";
import DadosTutor from "./components/pages/dadosTutor";
import Header from "./components/pages/header";

const Greeting: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Bem-vindo à página inicial</div>} />
        <Route path="/cadastroP" element={<CadastroPrestador />} />
        <Route path="/cadastro" element={<CadastroTutor />} />
        <Route path="/ajuda" element={<div> Página em construção... </div>} />
        <Route path="/cadastroPet" element={<CadastroPet />} />
        <Route path="/passeadorEpetsitter" element={<PrestadoPag />} />
        <Route
          path="/dadosTutor"
          element={
            <DadosTutor
              name="João Silva"
              email="joao@email.com"
              cpf="123.456.789-00"
              nascimento="1990-01-01"
              celular="11999999999"
              pais="Brasil"
              estado="SP"
              bairro="Centro"
              cep="01000-000"
              cidade="São Paulo"
              endereco="Rua Exemplo"
              numero="123"
              complemento="Apto 1"
            />
          }
        />
        <Route
          path="/perfiltutor"
          element={
            <PerfilTutor
              name="João Silva"
              onEditProfile={() => console.log("Editar perfil clicado")}
              onMeusDados={() => console.log("Meus dados clicado")}
              onDadosPet={() => console.log("Dados do pet clicado")}
              onHistorico={() => console.log("Histórico clicado")}
              onNovoAgendamento={() => console.log("Novo agendamento clicado")}
              onEditarSenha={() => console.log("Editar senha clicado")}
            />
          }
        />
        <Route
          path="/petsitter"
          element={
            <PerfilPrestador
              name="João Silva"
              onEditProfile={() => console.log("Editar perfil clicado")}
              onMeusDados={() => console.log("Meus dados clicado")}
              onDadosPet={() => console.log("Dados do pet clicado")}
              onHistorico={() => console.log("Histórico clicado")}
              onNovoAgendamento={() => console.log("Novo agendamento clicado")}
              onEditarSenha={() => console.log("Editar senha clicado")}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default Greeting;
