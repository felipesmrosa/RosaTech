import React from "react";
import logo from "@/assets/imagens/variant02.png";

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho__container">
        <img src={logo} alt="Logo" className="cabecalho__container--logo" />
        <nav>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
