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
          <p>Email: felipesmrosa@gmail.com</p>
          <p>Telefone: (47) 9 9142-4212</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2024 - Soluções tecnológicas para o seu negócio.</p>
      </div>
    </footer>
  );
}
