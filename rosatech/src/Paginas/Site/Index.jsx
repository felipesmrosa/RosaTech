import { Cabecalho } from "@/componentes/Site/Cabecalho/Index";
import { Rodape } from "@/componentes/Site/Rodape/Index";
import React from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Cabecalho />

      <Outlet />

      <Rodape />
    </>
  );
}
