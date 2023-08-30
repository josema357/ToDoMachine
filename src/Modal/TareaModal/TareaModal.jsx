import React, { useContext, useState} from 'react';
import './TareaModal.css';
import { TodoContext } from '../../Context/ToDoContext';

function TareaModal() {
  const {setOpenModal, updateTodo, textInputModal, setTextInputModal}=useContext(TodoContext);
  const [textInitial]=useState(textInputModal);
  const inputOnChange=(e)=>{
    setTextInputModal(e.target.value);
  }
  return (
    <form className='container' onSubmit={(e)=>{
      e.preventDefault();
      updateTodo(textInitial, textInputModal);
      setOpenModal(false);
    }}>
        <label className='label-editar' htmlFor="textToDo">Editar Tarea</label>
        <input 
          id='textToDo' 
          name='textToDo' 
          className='input-editar' 
          type="text" 
          placeholder='Ingresa texto'
          value={textInputModal}
          onChange={inputOnChange} />
        <button type='submit' className='toDoGuardar'>Guardar</button>
    </form>
  )
}

export {TareaModal};