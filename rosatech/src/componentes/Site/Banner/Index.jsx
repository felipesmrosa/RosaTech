import React from "react";
import logo from "@/assets/imagens/variant05.svg"

export function Banner() {
  return (
    <section className="banner">
      <div className="banner__background"></div>
      <div className="banner__overlay"></div>
      <div className="banner__container">
        <h2>RosaTech</h2>
        <img src={logo} alt="" />
        <p>Desabrochando para Novas Possibilidades Digitais.</p>
        <button>Saiba Mais</button>
      </div>
    </section>
  );
}
