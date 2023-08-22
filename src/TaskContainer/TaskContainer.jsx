import React from "react";
import { TaskContainerUI } from "./TaskContainerUI";
import { ToDoProvider } from "../Context/ToDoContext";

function TaskContainer() {
  return (
    <ToDoProvider>
      <TaskContainerUI/>
    </ToDoProvider>
  );
}

export {TaskContainer};