import "./ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  return (
    <>
      <h1>
        Tus tareas
      </h1>
      <h2>
        Haz completado {completed} de {total}
      </h2>
    </>
  );
}

export { ToDoCounter };
