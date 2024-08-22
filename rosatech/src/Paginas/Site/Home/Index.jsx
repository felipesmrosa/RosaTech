/* eslint-disable react/no-unescaped-entities */
import programadores from "@/assets/imagens/programadores.jpg";
import { Banner } from "@/componentes/Site/Banner/Index";
import { Produtos } from "@/componentes/Site/Produtos/Index";
import React from "react";
import { Helmet } from "react-helmet";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Início | RosaTech</title>
      </Helmet>
      <Banner />
      <div className="landingPage">
        <section className="landingPage__section" id="sobre">
          <div className="landingPage__container landingPage__container--about">
            <div className="landingPage__text">
              <h2>Sobre Nós</h2>
              <p>
                Na RosaTech, cultivamos tecnologia para impulsionar o
                crescimento da sua empresa. Oferecemos soluções personalizadas,
                desde sites modernos até sistemas de controle eficientes,
                simplificando processos e maximizando resultados.
              </p>
            </div>
            <div className="landingPage__image">
              <img src={programadores} alt="Sobre a RosaTech" />
            </div>
          </div>
        </section>

        <Produtos />

        <section className="landingPage__section" id="avaliacoes">
          <div className="landingPage__container">
            <h2>Avaliações de Clientes</h2>
            <p>O que nossos clientes estão dizendo sobre nós:</p>
            <div className="avaliacoes__lista">
              <div className="avaliacoes__coluna">
                <div className="avaliacao">
                  <p>
                    "A RosaTech transformou a maneira como gerenciamos nossos
                    processos. Excelente serviço!"
                  </p>
                  <span>- Academia Barossi</span>
                </div>
                <div className="avaliacao">
                  <p>
                    "A equipe é extremamente profissional e sempre pronta para
                    ajudar. Recomendo!"
                  </p>
                  <span>- othiagooliveira</span>
                </div>
              </div>
              <div className="avaliacoes__coluna">
                <div className="avaliacao">
                  <p>
                    "Graças à RosaTech, nosso site ficou incrível e muito mais
                    funcional."
                  </p>
                  <span>- Gabriela Andrea</span>
                </div>
                <div className="avaliacao">
                  <p>
                    "Recomendo a RosaTech a todos que buscam inovação e
                    qualidade."
                  </p>
                  <span>- PokeCenter ITJ</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
