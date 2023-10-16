import React from "react";

const Alert = ({ sentColab }) => {
  console.log("alert sentcolab", sentColab);
  return (
    <div>
      <h1>{`${sentColab ? "Colaborador agregado!" : "Completa todos los campos"}`}</h1>
    </div>
  );
};

export default Alert;
