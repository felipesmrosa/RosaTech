import React, { useState } from "react";
import logo from "@/assets/imagens/variant02.png";
import { useNavigate } from "react-router-dom";

export function Cabecalho() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const inicio = () => {
    navigate("/")
  }
  const sobre = () => {
    navigate("/sobre")
  }
  const servicos = () => {
    navigate("/servicos")
  }
  const contato = () => {
    navigate("/contato")
  }

  return (
    <header className="cabecalho">
      <div className="cabecalho__container">
        <img src={logo} alt="Logo" className="cabecalho__logo" />
        <div
          className={`cabecalho__menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`cabecalho__nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={inicio}>
              <a onClick={toggleMenu}>Início</a>
            </li>
            <li onClick={sobre}>
              <a onClick={toggleMenu}>Sobre</a>
            </li>
            <li onClick={servicos}>
              <a onClick={toggleMenu}>Serviços</a>
            </li>
            <li onClick={contato}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://wa.me/5547991424212?text=Olá,%20tenho%20interesse%20em%20conhecer%20a%20RosaTech!",
                    "_blank"
                  )
                }
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
