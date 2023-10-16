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
  const [sentColab, setSentColab] = useState({ sent: false, name: "", trySubmit: false });
  const [filteredArray, setFilteredArray] = useState(colaboradores);

  return (
    <>
      <div className="main-container">
        <h1 className="main-title">Listado colaboradores</h1>
        <div className="buscador-listado-container">
          <Buscador elementos={colaboradores} setFilteredArray={setFilteredArray} />
          <Listado datos={filteredArray} />
        </div>
        <div className="form-alert-container">
          <Formulario originalColabs={colaboradores} updateColabs={setColaboradores} setSentColab={setSentColab} setFilteredArray={setFilteredArray} />
          <Alert sentColab={sentColab} />
        </div>
      </div>
    </>
  );
}

export default App;
