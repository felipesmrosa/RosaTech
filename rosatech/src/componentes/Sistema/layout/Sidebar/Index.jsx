import {
  faArrowRightFromBracket,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Dashboard</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <span>Clientes</span>
        </li>
        <li className="logout">
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
          <span>Deslogar</span>
        </li>
      </ul>
    </div>
  );
}
