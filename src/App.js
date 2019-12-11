import Saludar from "./components/Saludar";
import React from "react";

function App() {
    return (
      //así se llama un componente
      <div className= "App">
      <h1>Primer compenente</h1>


      <p><Saludar nombre = "Daniel" apellido = "Castiblanco" edad = "24"/></p>
      <p><Saludar nombre = "Carlos" apellido = "Nosemeocurrio" /></p>
      </div>
    );

}

export default App;
