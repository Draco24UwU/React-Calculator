import { Outlet } from "react-router-dom";
import Home from "@/pages/Home";

function Content() {
  return (
    <>
      {/*Main es un componente condicional que solo se mostrara si estamos en la ruta inicial "/" */}
      <Home />
      {/*Outlet se utiliza para renderizar las paginas que estan definidas en el App Router.*/}
      <Outlet />
    </>
  );
}

export default Content;
