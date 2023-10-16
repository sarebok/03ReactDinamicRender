import React from "react";

const Alert = ({ sentColab }) => {
  console.log("alert sentcolab", sentColab);
  return (
    <div>
      <h4 className={`added-${sentColab}`}>{`${sentColab ? "Colaborador agregado!" : "Completa todos los campos"}`}</h4>
    </div>
  );
};

export default Alert;
