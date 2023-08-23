
import "./ToDoItem.css";
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";
import { useContext } from "react";
import { TodoContext } from "../Context/ToDoContext";

function ToDoItem({ text, completed, onComplete, onDelete }) {
  const {setOpenModal} = useContext(TodoContext);
  return (
    <li onClick={()=> {
      setOpenModal(state => !state);
    }}>
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
