import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function BotoesDeAcao() {
  return (
    <div className="card__acoes">
      <FontAwesomeIcon
        className="card__acoes--edit"
        icon={faPenToSquare}
      />
      <FontAwesomeIcon
        className="card__acoes--del"
        icon={faTrash}
      />
    </div>
  );
}
