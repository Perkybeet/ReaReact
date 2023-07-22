import React, {useState} from "react";

export const Tareas = () => {
    const [tarea, setTarea] = useState({
        completada: 'false',
    })

    const handleTarea = (e) => {
        setTarea((prevData) => ({
            ...prevData,
            completada: !prevData.completada,
        }))
    }

    return(
        <div className="listaTareas">
            <button id={tarea.completada ? "completada" : "completar"} onClick={handleTarea}>{tarea.completada ? "Completada" : "Completar"}</button>
        </div>
    );
}