import React from "react";
import { TaskContainer } from "./TaskContainer/TaskContainer";
import { CreateTaskContainer } from "./CreateTaskContainer/CreateTaskContainer";

function App() {
  return (
    <>
      <CreateTaskContainer />
      <TaskContainer />
    </>
  );
}

export default App;
