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
import { BaseColaboradores } from "./BaseColaboradores";

/*  Cargar la lista de colaboradores desde un archivo js e importarlos en el archivo
App.jsx */

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const addColab = (nombre, correo, edad, cargo, telefono) => {
    const updateColaboradores = [...colaboradores];
    updateColaboradores.push({
      id: Date.now(),
      nombre: nombre,
      correo: correo,
      edad: edad,
      cargo: cargo,
      telefono: telefono,
    });
    setColaboradores(updateColaboradores);
  };

  /*   const updateList = (tester) => {
    return tester ? setUpdate("yes") : setUpdate("no");
  }; */

  return (
    <>
      <Listado datos={colaboradores} />
      <Formulario addNewColab={addColab} />
    </>
  );
}

export default App;
