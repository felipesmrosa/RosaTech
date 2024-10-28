import {
  faBootstrap,
  faGithub,
  faNodeJs,
  faReact,
  faSass,
  faSquareJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Linguagens() {
  return (
    <section className="linguagens">
      <div className="linguagens__container">
        <h2>Linguagens e Frameworks</h2>
        <div className="linguagens__icons">
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faReact} className="linguagens__icon" />
            <p>React</p>
          </div>
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faSass} className="linguagens__icon" />
            <p>SASS</p>
          </div>
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faWordpress} className="linguagens__icon" />
            <p>WordPress</p>
          </div>
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faNodeJs} className="linguagens__icon" />
            <p>Node.js</p>
          </div>
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faSquareJs} className="linguagens__icon" />
            <p>JS</p>
          </div>
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faBootstrap} className="linguagens__icon" />
            <p>Bootstrap</p>
          </div>
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faGithub} className="linguagens__icon" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
}
