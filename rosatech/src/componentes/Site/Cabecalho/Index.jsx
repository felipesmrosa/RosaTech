import React, { useState } from "react";
import logo from "@/assets/imagens/variant02.png";

export function Cabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
              <a href="#inicio" onClick={toggleMenu}>
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={toggleMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#serviços" onClick={toggleMenu}>
                Serviços
              </a>
            </li>
            <li>
              <a
              style={{cursor: "pointer"}}
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
