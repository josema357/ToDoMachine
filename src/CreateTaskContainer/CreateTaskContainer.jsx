import React from "react";
import "./CreateTaskContainer.css";
import {ToDoProvider} from "../Context/ToDoContext";
import { CreateTaskContainerUI } from "./CreateTaskContainerUI";

function CreateTaskContainer() {
  return (
    <ToDoProvider>
      <CreateTaskContainerUI/>
    </ToDoProvider>
  );
}

export { CreateTaskContainer };
