import React, { useContext } from 'react';
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { ToDoLoading } from '../ToDoLoading/ToDoLoading';
import { ToDoError } from '../ToDoError/ToDoError';
import { EmptyToDo } from '../EmptyToDo/EmptyToDo';

import './TaskContainer.css';
import { TodoContext } from '../Context/ToDoContext';
import { Modal } from '../Modal/Modal';
import { TareaModal } from '../Modal/TareaModal/TareaModal';

function TaskContainerUI() {
  const {
    loading, 
    error, 
    searchedToDos, 
    completeToDo, 
    deleteToDo,
    openModal
  } = useContext(TodoContext);

  return (
    <div className="containerTasks">
      <ToDoCounter/>
      <ToDoSearch/>

      <ToDoList>
        {loading && <ToDoLoading/>}
        {error && <ToDoError/>}
        {(!loading && searchedToDos.length===0) && <EmptyToDo/>}

        {searchedToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={()=>completeToDo(toDo.text)}
            onDelete={()=>deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>

      {openModal && (
        <Modal>
          <TareaModal/>
        </Modal>
      )}
    </div>
  )
}

export {TaskContainerUI};