import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
/*  Crea al menos 4 componentes, Listado, Formulario, Buscador y Alert, todos
estos serán importados desde App.jsx.
 */
import "./components/Alert";
import "./components/Buscador";
import "./components/Formulario";
import "./components/Listado";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

/*  Cargar la lista de colaboradores desde un archivo js e importarlos en el archivo
App.jsx */

function App() {
  return (
    <>
      <Listado />
      <Formulario />
    </>
  );
}

export default App;
