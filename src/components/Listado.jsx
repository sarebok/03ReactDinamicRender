/*  En el componente Listado se deben mostrar los datos de los colaboradores
utilizando una tabla de Bootstrap. */

import React from "react";

const Listado = ({ datos }) => {
  return (
    <div>
      <h1>Listado</h1>
      {datos.map((dato) => (
        <p key={dato.id}>{dato.nombre}</p>
      ))}
    </div>
  );
};

export default Listado;
