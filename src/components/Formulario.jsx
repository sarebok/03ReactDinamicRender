/* El componente formulario debe contener el formulario con los campos necesarios
para agregar colaboradores a la lista y un botón para agregar los campos, además se
debe validar que los campos no se encuentren vacíos */

import React from "react";
import { useState } from "react";

/* const Formulario = ({ addNewColab }) => { */
const Formulario = ({ updateColabs, originalColabs, setSentColab, setFilteredArray }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  /* 
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
    addNewColab(updateColaboradores);
    setSentColab(true);
    setFilteredArray(updateColaboradores);
  }; */

  const addColab = (nombre, correo, edad, cargo, telefono) => {
    const updateColaboradores = [...originalColabs];
    updateColaboradores.push({
      id: Date.now(),
      nombre: nombre,
      correo: correo,
      edad: edad,
      cargo: cargo,
      telefono: telefono,
    });
    updateColabs(updateColaboradores);

    setFilteredArray(updateColaboradores);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !age || !position || !phone) {
      setSentColab(false);
      return;
    }
    setSentColab(true);
    addColab(name, email, age, position, phone);
  };
  return (
    <div>
      <h3>Ingresa los datos del colaborador a agregar</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="name" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="email" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" id="age" placeholder="age" onChange={(e) => setAge(e.target.value)} required />
        <input type="text" id="position" placeholder="position" onChange={(e) => setPosition(e.target.value)} required />
        <input type="text" id="phone" placeholder="phone" onChange={(e) => setPhone(e.target.value)} required />
        <button type="submit">Add Colab</button>
      </form>
    </div>
  );
};

export default Formulario;
