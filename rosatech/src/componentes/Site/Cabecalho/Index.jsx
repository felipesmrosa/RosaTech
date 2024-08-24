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
    navigate("/");
    setMenuOpen(false); // Fecha o menu após a navegação
  };

  const contato = () => {
    navigate("/contato");
    setMenuOpen(false); // Fecha o menu após a navegação
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

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
            <li>
              <a onClick={inicio}>Início</a>
            </li>
            <li>
              <a onClick={() => handleScroll("sobre")}>Sobre</a>
            </li>
            <li>
              <a onClick={() => handleScroll("servicos")}>Serviços</a>
            </li>
            <li>
              <a onClick={contato}>Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
