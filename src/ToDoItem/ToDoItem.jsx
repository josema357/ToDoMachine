
import "./ToDoItem.css";
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";

function ToDoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <CompleteIcon 
        completed={completed}
        onComplete={onComplete}/>
      <p className={`text-task ${completed && "completed"}`}>{text}</p>
      <DeleteIcon
        onDelete={onDelete}/>
    </li>
  );
}

export { ToDoItem };
