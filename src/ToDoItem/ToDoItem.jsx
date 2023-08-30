
import "./ToDoItem.css";
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from "../ToDoIcon/DeleteIcon";
import { useContext } from "react";
import { TodoContext } from "../Context/ToDoContext";

function ToDoItem({ text, completed, onComplete, onDelete }) {
  const {setOpenModal, setTextInputModal} = useContext(TodoContext);
  const handlerPressElement=(e)=>{
    const textToDo=e.target.textContent;
    setTextInputModal(textToDo);
    setOpenModal(state => !state);
  }
  return (
    <li>
      <CompleteIcon 
        completed={completed}
        onComplete={onComplete}/>
      <p 
        id="p_text"
        className={`text-task ${completed && "completed"}`} 
        onClick={handlerPressElement}>
          {text}
      </p>
      <DeleteIcon
        onDelete={onDelete}/>
    </li>
  );
}

export { ToDoItem };
