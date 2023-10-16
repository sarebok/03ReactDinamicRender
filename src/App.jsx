import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Alert";
import "./components/Buscador";
import "./components/Formulario";
import "./components/Listado";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alert from "./components/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
import Buscador from "./components/Buscador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [sentColab, setSentColab] = useState(false);
  const [filteredArray, setFilteredArray] = useState(colaboradores);

  return (
    <>
      <Buscador elementos={colaboradores} setFilteredArray={setFilteredArray} />
      <Listado datos={filteredArray} />
      {/* <Formulario addNewColab={addColab} /> */}
      <Formulario originalColabs={colaboradores} updateColabs={setColaboradores} setSentColab={setSentColab} setFilteredArray={setFilteredArray} />
      <Alert sentColab={sentColab} />
    </>
  );
}

export default App;
