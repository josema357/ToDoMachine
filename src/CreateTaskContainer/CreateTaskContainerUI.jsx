import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context/ToDoContext';

function CreateTaskContainerUI() {
    const {addToDo}=useContext(TodoContext);
    const [newToDo, setNewToDo]=useState('');
    const inputOnChange = (e)=>{
        setNewToDo(e.target.value);
    }
    const handlerButtonCreate=()=>{
      addToDo(newToDo)
      setNewToDo('');
    }

  return (
    <div className="containerCreate">
      <p className="title-create">Crear Nueva tarea</p>
      <div className="input-user">
        <p className="label-create">Nombre de la tarea</p>
        <input
          className="input-create"
          type="text"
          placeholder="Introduce el nombre de la tarea"
          value={newToDo}
          onChange={inputOnChange}
        />
        <button className="btn-create" onClick={handlerButtonCreate}>
          Crear Tarea
        </button>
      </div>
      </div>
  )
}

export {CreateTaskContainerUI};