import React from "react";
import "./perfilTotal.css";
import avatarExemplo from "../../assets/gato.webp";
import { useNavigate } from "react-router-dom";

interface PerfilPrestadorProps {
  name: string;
  avatarUrl?: string; // agora pode ser opcional
  onEditProfile: () => void;
  onMeusDados: () => void;
  onDadosPet: () => void;
  onHistorico: () => void;
  onNovoAgendamento: () => void;
  onEditarSenha: () => void;
}

const PerfilPrestador: React.FC<PerfilPrestadorProps> = ({
  name,
  avatarUrl,
  onEditProfile,
  onMeusDados,
  onDadosPet,
  onHistorico,
  onNovoAgendamento,
  onEditarSenha,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Cabeçalho do perfil */}
      <header className="profile-header">
        <h1>Perfil Prestador</h1>
        <img
          // usa a imagem do backend se existir, senão usa a imagem local de exemplo
          src={avatarUrl || avatarExemplo}
          alt={`${name} avatar`}
          className="profile-avatar"
        />
        {/* se name estiver vazio, mostra "Nome do Tutor" */}
        <h1 className="profile-name">{name || "Nome do Tutor"}</h1>
        <button onClick={onEditProfile} className="edit-profile-button">
          Editar Perfil
        </button>
      </header>

      {/* Ações do usuário */}
      <nav className="profile-actions">
        <div className="btn-group btn-up">
          <button onClick={onMeusDados}>Meus Dados</button>
          <button onClick={onDadosPet}>Dados do Pet</button>{" "}
          {/*deixo ou tiro?*/}
          <button onClick={onHistorico}>Histórico</button>
        </div>
        <div className="btn-group btn-down">
          <button onClick={onNovoAgendamento}>Novo Agendamento</button>
          <button onClick={() => navigate("/cadastroPet")}>
            Cadastrar Novo Pet
          </button>
          <button onClick={onEditarSenha}>Editar Senha</button>
        </div>
      </nav>
    </>
  );
};

export default PerfilPrestador;
