import React from "react";

const Buscador = ({ elementos, setFilteredArray }) => {
  const handleBuscador = (e) => {
    const filtrados = elementos.filter((elemento) => elemento.nombre.toLowerCase().includes(e));
    setFilteredArray(filtrados);
  };
  return (
    <div>
      <h3>Busca por nombre de colaborador</h3>
      <input id="input-buscador" type="text" placeholder="Busca colaboradores por nombre" onChange={(e) => handleBuscador(e.target.value.toLowerCase())} />
    </div>
  );
};

export default Buscador;
