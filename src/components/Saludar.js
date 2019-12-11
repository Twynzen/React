import React from "react";

export default function Saludar(props) {
  const {nombre, apellido, edad} = props;
  console.log(props);
  return `Hola ${nombre} tu apellido es ${apellido} ¿correcto?`;
}
//export default Saludar;
