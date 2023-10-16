import React from "react";

const Alert = ({ sentColab }) => {
  console.log("alert sentcolab", sentColab.sent);
  console.log("alert trysubmit", sentColab.trySubmit);
  return (
    <div>
      <h4 className={`added-${sentColab.sent}`}>
        {`${sentColab.trySubmit ? (sentColab.sent ? `colaborador ${sentColab.name} agregado` : "Completa todos los campos") : ""}`}
      </h4>
    </div>
  );
};

export default Alert;
