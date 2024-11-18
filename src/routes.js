import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import PaginaPadrao from "./components/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="*" element={<div>Pagina não Encontrada!</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
