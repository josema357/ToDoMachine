import React, { useState } from "react";
import { TaskContainerUI } from "./TaskContainerUI";
import { useLocalStorage } from "../hooks/useLocalStorage";

function TaskContainer() {

  const [toDos, saveToDos]=useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue]=useState('');

  const completedToDos=toDos.filter(toDo=>toDo.completed).length;
  const totalToDos=toDos.length;
  const searchedToDos=toDos.filter(toDo=>toDo.text.toLowerCase().includes(searchValue.toLowerCase()));

  

  const completeToDo=(text)=>{
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      toDo=>toDo.text === text
    );
    newToDos[toDoIndex].completed=true;
    saveToDos(newToDos)
  }

  const deleteToDo=(text)=>{
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      toDo=>toDo.text === text
    );
    newToDos.splice(toDoIndex,1);
    saveToDos(newToDos)
  }

  return (
    <TaskContainerUI
      completedToDos={completedToDos}
      totalToDos={totalToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export {TaskContainer};