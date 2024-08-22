import React from "react";
import logo from "@/assets/imagens/variant01.png";

export function Rodape() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__logo">
          <img src={logo} alt="Logo da RosaTech" />
        </div>
        <div className="footer__container__info">
          <p>Contato: felipesmrosa@gmail.com</p>
          <p>Telefone: (47) 9 9142-4212</p>
          {/* <p>
            <a
              href="https://www.instagram.com/rosatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p> */}
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2024 - Soluções tecnológicas para o seu negócio.</p>
      </div>
    </footer>
  );
}
