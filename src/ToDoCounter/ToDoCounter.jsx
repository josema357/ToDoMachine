import { useContext } from "react";
import "./ToDoCounter.css";
import { TodoContext } from "../Context/ToDoContext";

function ToDoCounter() {
  const {completedToDos, totalToDos} = useContext(TodoContext);

  return (
    <>
      <h1>
        Tus tareas
      </h1>
      <h2>
        Haz completado {completedToDos} de {totalToDos}
      </h2>
    </>
  );
}

export { ToDoCounter };
