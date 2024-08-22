import { Routes, Route } from "react-router-dom";
import { Sistema } from "./componentes/Sistema/layout/Index";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./Paginas/Sistema/Dashboard/Index";
import { Login } from "./Paginas/Sistema/Login/Index";
import { Home } from "./Paginas/Site/Home/Index";

export function App() {
  return (
    <>
      <ToastContainer autoClose={500} />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>

        <Route path="/sistema" element={<Login />} />

        <Route path="/sistema" element={<Sistema />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}
