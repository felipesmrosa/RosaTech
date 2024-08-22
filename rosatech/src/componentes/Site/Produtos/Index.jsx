import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Linguagens } from "../Linguagens/Index";
import { useNavigate } from "react-router-dom";

export function Produtos() {
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  const abrirInfoMensalidade = () => {
    setShowTooltip(true);
  };

  const fecharInfoMensalidade = () => {
    setShowTooltip(false);
  };

  const entrarEmContato = () => {
    navigate('/contato');
  };

  return (
    <section className="landingPage__section" id="serviços">
      <div className="landingPage__container">
        <h2>Serviços</h2>
        <div className="landingPage__cards">
          <div
            onClick={entrarEmContato}
            style={{ cursor: "pointer" }}
            className="landingPage__cards__card"
          >
            <h3>Pacote Orquídea</h3>
            <p>
              Representando elegância e sofisticação, o Pacote Orquídea oferece
              o desenvolvimento de um site profissional com design responsivo e
              otimização para SEO.
            </p>
            <span className="price">Entrar em contato</span>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://wa.me/5547991424212?text=Olá,%20estou%20interessado%20no%20Pacote%20Girassol!",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
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
            </p>

            <span className="price">Entrar em contato</span>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://wa.me/5547991424212?text=Olá,%20estou%20interessado%20no%20Pacote%20Rosa!",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
            className="landingPage__cards__card"
          >
            <h3>Pacote Rosa</h3>
            <p>
              O Pacote Rosa simboliza a completude e excelência, oferecendo a
              integração total do site com o sistema de controle, proporcionando
              uma solução digital completa.
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
            <span className="price">Entrar em contato</span>
          </div>
        </div>
      </div>
      <Linguagens />
    </section>
  );
}
