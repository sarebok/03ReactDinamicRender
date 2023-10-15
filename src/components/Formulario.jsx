/* El componente formulario debe contener el formulario con los campos necesarios
para agregar colaboradores a la lista y un botón para agregar los campos, además se
debe validar que los campos no se encuentren vacíos */

import React from "react";
import { useState } from "react";

const Formulario = ({ addNewColab }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewColab(name);
  };
  return (
    <div>
      <h1>Agregar colaborador</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="name" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} required />
        <p>{name}</p>
        {/*         <input type="email" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" id="age" placeholder="age" onChange={(e) => setAge(e.target.value)} required />
        <input type="text" id="position" placeholder="position" onChange={(e) => setPosition(e.target.value)} required />
        <input type="text" id="phone" placeholder="phone" onChange={(e) => setPhone(e.target.value)} required /> */}
        <button type="submit">Add Colab</button>
      </form>
    </div>
  );
};

export default Formulario;
