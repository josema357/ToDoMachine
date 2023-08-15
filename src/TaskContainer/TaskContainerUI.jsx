import React from 'react';
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from "../ToDoItem/ToDoItem";
import './TaskContainer.css';

function TaskContainerUI(
    {
    completedToDos,
    totalToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDo,
    deleteToDo
    }
) {
  return (
    <div className="containerTasks">
      <ToDoCounter completed={completedToDos} total={totalToDos} />
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ToDoList>
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
    </div>
  )
}

export {TaskContainerUI};