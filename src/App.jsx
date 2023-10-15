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
  /* Define lo que quiero: colaboradores totales son los iniciales mas todos los que quiera añadir */
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  /* colaboradores=ini+new, entonces, como agregar new */

  const addColab = (nombre) => {
    const colab = { id: Date.now(), nombre: nombre };
    BaseColaboradores.push(colab);
    console.log("basecolaboradores", BaseColaboradores);
  };

  return (
    <>
      <Listado datos={colaboradores} />
      <Formulario addNewColab={addColab} />
    </>
  );
}

export default App;
