import {
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
  faSass,
  faSquareJs,
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
            <FontAwesomeIcon icon={faNodeJs} className="linguagens__icon" />
            <p>Node.js</p>
          </div>
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faSquareJs} className="linguagens__icon" />
            <p>JS</p>
          </div>
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faHtml5} className="linguagens__icon" />
            <p>HTML5</p>
          </div>
          <div className="linguagens__item">
            <FontAwesomeIcon icon={faCss3} className="linguagens__icon" />
            <p>CSS3</p>
          </div>
        </div>
      </div>
    </section>
  );
}
