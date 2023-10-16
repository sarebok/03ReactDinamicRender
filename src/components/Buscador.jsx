import React from "react";

const Buscador = ({ elementos, setFilteredArray }) => {
  const handleBuscador = (e) => {
    const filtrados = elementos.filter((elemento) => elemento.nombre.toLowerCase().includes(e));
    setFilteredArray(filtrados);
  };
  return (
    <div>
      Buscar por nombre:
      <input type="text" onChange={(e) => handleBuscador(e.target.value.toLowerCase())} />
    </div>
  );
};

export default Buscador;
