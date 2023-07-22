import React, { useState } from "react";
import ReactDOM from "react-dom";
import { RegistroUsuario } from "./formulario";
import { ContadorB } from "./contadorB";
import { ContadorA } from "./contadorA";
import { Tareas } from "./tareas";
import { ListaTareas } from "./lista_tareas";
import { Titulo } from "./titulo";
import { Boton } from "./boton";
import { Temporizador } from "./temporizador";
import "./index.css";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("");

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedComponent(selectedOption);
  };

  return (
    <div>
      <h2>Selecciona un componente:</h2>
      <select value={selectedComponent} onChange={handleChange}>
        <option value="">Selecciona un componente</option>
        <option value="registroUsuario">Formulario de Registro de Usuario</option>
        <option value="contadorB">Contador básico</option>
        <option value="contadorA">Contador Avanzado</option>
        <option value="tareas">Tareas</option>
        <option value="lista_tareas">Lista tareas</option>
        <option value="titulo">Título</option>
        <option value="boton">Botón</option>
        <option value="temporizador">Temporizador</option>
      </select>

      {selectedComponent === "registroUsuario" && <RegistroUsuario />}
      {selectedComponent === "contadorB" && <ContadorB />}
      {selectedComponent === "contadorA" && <ContadorA />}
      {selectedComponent === "tareas" && <Tareas />}
      {selectedComponent === "lista_tareas" && <ListaTareas />}
      {selectedComponent === "titulo" && <Titulo nivel="h1" texto="Esto es un mensaje de prueba hecho con (props)" />}
      {selectedComponent === "boton" && <Boton texto="Esto es un botón hecho con (props)" backColor="lightgreen" colorText="black" />}
      {selectedComponent === "temporizador" && <Temporizador />}

    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));