import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <h1>AuWalk</h1>
          <ul>
            <li>
              <Link to="/passeadorEpetsitter">Quero ser prestador</Link>
            </li>
            <li>
              <Link to="/ajuda">Ajuda</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <Link to="/cadastro">
            <button className="navbar-button-estilo">Cadastrar</button>
          </Link>

          <div className="dropdown">
            <button
              className="navbar-button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Acessar conta
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/perfiltutor"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Tutor
                  </Link>
                </li>
                <li>
                  <Link to="/petsitter" onClick={() => setDropdownOpen(false)}>
                    Pet sitter
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
