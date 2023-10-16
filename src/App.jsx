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
import Alert from "./components/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
import Buscador from "./components/Buscador";

/*  Cargar la lista de colaboradores desde un archivo js e importarlos en el archivo
App.jsx */

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [sentColab, setSentColab] = useState(false);
  const [filteredArray, setFilteredArray] = useState(colaboradores);
  console.log("1 sentcolab: ", sentColab);

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
    setSentColab(true);
    setFilteredArray(updateColaboradores);
    console.log("2 sentcolab: ", sentColab);
  };

  return (
    <>
      <Buscador elementos={colaboradores} setFilteredArray={setFilteredArray} />
      <Listado datos={filteredArray} />
      <Formulario addNewColab={addColab} />
      <Alert sentColab={sentColab} />
    </>
  );
}

export default App;
