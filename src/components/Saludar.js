import React from "react";

export default function Saludar(props) {
  const { nombre, enviarSaludo } = props;
  console.log(props);
  return (
    <div>
      <p>hola {nombre}.</p>
      <button onClick={() => enviarSaludo(nombre)}>Enviar saludo</button>
    </div>
  );
}
//export default Saludar;
