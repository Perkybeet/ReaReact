import React, { useState } from "react";

export const ListaTareas = () => {
  const [tareas, setTareas] = useState([
    { id: 1, nombre: "Sacar al perro", completada: false },
    { id: 2, nombre: "Hacer la compra", completada: false },
    { id: 3, nombre: "Limpiar el baño", completada: true },
    { id: 4, nombre: "Llevar el coche al taller", completada: false },
    { id: 5, nombre: "Pagar hacienda", completada: true }
  ]);

  const [nuevaTareaNombre, setNuevaTareaNombre] = useState("");

  const handleTareas = (id) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const addTareas = () => {
    if (nuevaTareaNombre.trim() !== "") {
      setTareas((prevTareas) => ([
        ...prevTareas,
        { id: tareas[tareas.length - 1].id + 1, nombre: nuevaTareaNombre, completada: false }
      ]));
      setNuevaTareaNombre("");
    }
  };

  const removeTareas = (id) => {
    setTareas((prevTareas) => (
      prevTareas.filter((tareas) => tareas.id !== id)
    ))
  }

  return (
    <div>
      <table>
        {tareas.map((tarea) => (
          <tr className={"row_"+tarea.id} key={tarea.id}>
            <th>{tarea.nombre}</th>
            <th>
              <button
                className={tarea.id}
                onClick={() => handleTareas(tarea.id)}
                id={!tarea.completada ? "completar" : "completada"}
              >
                {!tarea.completada ? "Completar" : "Completada"}
              </button>
              <button
              className={tarea.id}
              onClick={() => removeTareas(tarea.id)}
              >
                Borrar
              </button>
            </th>
          </tr>
        ))}
      </table>

      <div id="frmAñadirTarea">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={nuevaTareaNombre}
          onChange={(e) => setNuevaTareaNombre(e.target.value)}
        />
        <span id="btnAñadirTarea" onClick={addTareas}>Añadir</span>
      </div>
    </div>
  );
};
