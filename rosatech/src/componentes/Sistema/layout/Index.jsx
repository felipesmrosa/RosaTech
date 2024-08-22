import { Cabecalho } from "./Cabecalho/Index";
import { Sidebar } from "./Sidebar/Index";
import { Outlet } from "react-router-dom";

export function Sistema() {
  return (
    <div className="main">
      <Cabecalho />
      <Sidebar />

      <div className="main__conteudo">
        <Outlet />
      </div>
    </div>
  );
}
