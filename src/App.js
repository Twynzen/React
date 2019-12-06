import React from "react";

function App() {
  const holapues = () => {
    return "hola mundo pues";
  };

  const numero = () => {
    console.log(1);
  };

  return (
    <div className="App">
      <h1>Probando</h1>
      {holapues()}
      <button onClick={numero}>CLICK</button>
    </div>
  );
}

export default App;
