import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../assets/imagens/variant05.png";

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <img className="cabecalho--logo" src={logo} alt="" />
      <div className="cabecalho__configurações">
        <FontAwesomeIcon icon={faGear} size="lg" />
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>
    </header>
  );
}
