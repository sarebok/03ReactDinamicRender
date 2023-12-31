/*  En el componente Listado se deben mostrar los datos de los colaboradores
utilizando una tabla de Bootstrap. */

import React from "react";
import Table from "react-bootstrap/Table";

const Listado = ({ datos, update }) => {
  return (
    <div className="tabla">
      <h3>Listado</h3>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            {/* <th>#id</th> */}
            <th>Nombre</th>
            <th>correo</th>
            <th>edad</th>
            <th>cargo</th>
            <th>telefono</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            /* aqui va el bootstrap de la tabla */
            <tr key={dato.id}>
              <td>{dato.nombre}</td>
              <td>{dato.correo}</td>
              <td>{dato.edad}</td>
              <td>{dato.cargo}</td>
              <td>{dato.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Listado;
