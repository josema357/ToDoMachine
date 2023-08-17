import React from 'react';
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { ToDoLoading } from '../ToDoLoading/ToDoLoading';
import { ToDoError } from '../ToDoError/ToDoError';
import { EmptyToDo } from '../EmptyToDo/EmptyToDo';

import './TaskContainer.css';

function TaskContainerUI(
    {
    loading,
    error,
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
    </div>
  )
}

export {TaskContainerUI};