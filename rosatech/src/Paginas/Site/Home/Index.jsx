/* eslint-disable react/no-unescaped-entities */
import { Banner } from "@/componentes/Site/Banner/Index";
import { Cabecalho } from "@/componentes/Site/Cabecalho/Index";
import programadores from "@/assets/imagens/programadores.jpg";
import React, { useState } from "react";
import { Rodape } from "@/componentes/Site/Rodape/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Linguagens } from "@/componentes/Site/Linguagens/Index";

export function Home() {
  const [priceTextOrquidea, setPriceTextOrquidea] = useState("R$ 1.800,00");
  const [priceTextGirassol, setPriceTextGirassol] = useState("R$ 2.500,00");
  const [priceTextRosa, setPriceTextRosa] = useState("R$ 3.500,00");
  const [showTooltip, setShowTooltip] = useState(false);

  const mostrarPreco = (setter, text) => {
    setter(text);
  };

  const sumirPreco = (setter, text) => {
    setter(text);
  };

  const abrirInfoMensalidade = () => {
    setShowTooltip(true);
  };

  const fecharInfoMensalidade = () => {
    setShowTooltip(false);
  };

  return (
    <div className="landingPage">
      <Cabecalho />
      <Banner />

      <section className="landingPage__section" id="sobre">
        <div className="landingPage__container landingPage__container--about">
          <div className="landingPage__text">
            <h2>Sobre Nós</h2>
            <p>
              Na RosaTech, cultivamos tecnologia para impulsionar o crescimento
              da sua empresa. Oferecemos soluções personalizadas, desde sites
              modernos até sistemas de controle eficientes, simplificando
              processos e maximizando resultados.
            </p>
          </div>
          <div className="landingPage__image">
            <img src={programadores} alt="Sobre a RosaTech" />
          </div>
        </div>
      </section>

      <section className="landingPage__section" id="serviços">
        <div className="landingPage__container">
          <h2>Serviços</h2>
          <div className="landingPage__cards">
            <div
              onClick={() =>
                window.open(
                  "https://wa.me/5547991424212?text=Olá,%20estou%20interessado%20no%20Pacote%20Orquídea!",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
              onMouseEnter={() =>
                mostrarPreco(setPriceTextOrquidea, "Entrar em contato")
              }
              onMouseLeave={() =>
                sumirPreco(setPriceTextOrquidea, "R$ 1.800,00")
              }
              className="landingPage__cards__card"
            >
              <h3>Pacote Orquídea</h3>
              <p>
                Representando elegância e sofisticação, o Pacote Orquídea
                oferece o desenvolvimento de um site profissional com design
                responsivo e otimização para SEO.
              </p>
              <span className="price">{priceTextOrquidea}</span>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://wa.me/5547991424212?text=Olá,%20estou%20interessado%20no%20Pacote%20Girassol!",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
              onMouseEnter={() =>
                mostrarPreco(setPriceTextGirassol, "Entrar em contato")
              }
              onMouseLeave={() =>
                sumirPreco(setPriceTextGirassol, "R$ 2.500,00")
              }
              className="landingPage__cards__card"
            >
              <h3>Pacote Girassol</h3>
              <p>
                Foco e eficiência são os pilares do Pacote Girassol, que traz um
                sistema personalizado para gerenciamento de clientes, produtos e
                processos internos.
              </p>
              <p>
                <strong>Mensalidade:</strong> R$150
                <FontAwesomeIcon
                  onMouseEnter={abrirInfoMensalidade}
                  onMouseLeave={fecharInfoMensalidade}
                  style={{ marginLeft: "4px", cursor: "pointer" }}
                  icon={faCircleInfo}
                />
                {showTooltip && (
                  <span className="tooltip">
                    Estamos em constante evolução, garantindo que seu sistema
                    esteja sempre atualizado com as melhores práticas e
                    tecnologias, sem complicações.
                  </span>
                )}
                <br />
                <strong>Usuário adicional:</strong> R$30
              </p>

              <span className="price">{priceTextGirassol}</span>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://wa.me/5547991424212?text=Olá,%20estou%20interessado%20no%20Pacote%20Rosa!",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
              onMouseEnter={() =>
                mostrarPreco(setPriceTextRosa, "Entrar em contato")
              }
              onMouseLeave={() => sumirPreco(setPriceTextRosa, "R$ 3.500,00")}
              className="landingPage__cards__card"
            >
              <h3>Pacote Rosa</h3>
              <p>
                O Pacote Rosa simboliza a completude e excelência, oferecendo a
                integração total do site com o sistema de controle,
                proporcionando uma solução digital completa.
              </p>
              <p>
                <strong>Mensalidade:</strong> R$220
                <FontAwesomeIcon
                  onMouseEnter={abrirInfoMensalidade}
                  onMouseLeave={fecharInfoMensalidade}
                  style={{ marginLeft: "4px", cursor: "pointer" }}
                  icon={faCircleInfo}
                />
                {showTooltip && (
                  <span className="tooltip">
                    Estamos em constante evolução, garantindo que seu sistema
                    esteja sempre atualizado com as melhores práticas e
                    tecnologias, sem complicações.
                  </span>
                )}
              </p>
              <span className="price">{priceTextRosa}</span>
            </div>
          </div>
        </div>
        <Linguagens />
      </section>

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

      <Rodape />
    </div>
  );
}
