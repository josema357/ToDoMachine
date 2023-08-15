import React from "react";
import "./CreateTaskContainer.css";

function CreateTaskContainer() {
  

  return (
    <div className="containerCreate">
      <p className="title-create">Crear Nueva tarea</p>
      <div className="input-user">
        <p className="label-create">Nombre de la tarea</p>
        <input
          className="input-create"
          type="text"
          placeholder="Introduce el nombre de la tarea"
        />
        <button className="btn-create" onClick={() => console.log("click")}>
          Crear Tarea
        </button>
      </div>
    </div>
  );
}

export { CreateTaskContainer };
