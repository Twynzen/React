import Saludar from "./components/Saludar";
import React from "react";

function App() {
  const enviarSaludo = nombre => {
    console.log("hola " + nombre);
  };

  return (
    //así se llama un componente
    <div className="App">
      <h1>Primer compenente</h1>

      <Saludar nombre="Daniel" enviarSaludo={enviarSaludo} />

      <Saludar nombre="Carlos" enviarSaludo={enviarSaludo} />
    </div>
  );
}

export default App;
