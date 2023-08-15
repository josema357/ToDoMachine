
import "./ToDoItem.css";
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";

function ToDoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="black"
        className={`bi bi-check ${ completed ? "svg-check-icon" : "check-icon"}`}
        viewBox="0 0 16 16"
        onClick={onComplete}
      >
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
      </svg> */}
      <CompleteIcon 
        completed={completed}
        onComplete={onComplete}/>
      <p className={`text-task ${completed && "completed"}`}>{text}</p>
      <DeleteIcon
        onDelete={onDelete}/>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-x svg-close-icon"
        viewBox="0 0 16 16"
        onClick={onDelete}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg> */}
    </li>
  );
}

export { ToDoItem };
