import { Routes, Route } from "react-router-dom";
import { Sistema } from "./componentes/Sistema/layout/Index";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./Paginas/Sistema/Dashboard/Index";
import { Login } from "./Paginas/Sistema/Login/Index";
import { Home } from "./Paginas/Site/Home/Index";
import { FormularioContato } from "./Paginas/Site/FormularioContato/Index";
import { Layout } from "./Paginas/Site/Index";

export function App() {
  return (
    <>
      <ToastContainer autoClose={500} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<FormularioContato />} />
        </Route>

        <Route path="/sistema" element={<Login />} />

        <Route path="/sistema" element={<Sistema />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}
