import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

function ToDoProvider({children}){
    const {
        item: toDos,
        saveItem: saveToDos, 
        loading, 
        error
    }=useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue]=useState('');
    const [openModal, setOpenModal]=useState(false);
    const [textInputModal,setTextInputModal]=useState('');
    
    const completedToDos=toDos.filter(toDo=>toDo.completed).length;
    const totalToDos=toDos.length;
    const searchedToDos=toDos.filter(toDo=>toDo.text.toLowerCase().includes(searchValue.toLowerCase()));
    
    const addToDo=(text)=>{
        const newToDos = [...toDos];
        newToDos.push({
            text,
            completed: false,
        })
        saveToDos(newToDos);
    }

    const updateTodo=(text, newText)=>{
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(toDo=>toDo.text === text);
        newToDos[toDoIndex].text=newText;
        saveToDos(newToDos);
    }
    
    const completeToDo=(text)=>{
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
          toDo=>toDo.text === text
        );
        newToDos[toDoIndex].completed=true;
        saveToDos(newToDos);
    }
    
    const deleteToDo=(text)=>{
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
          toDo=>toDo.text === text
        );
        newToDos.splice(toDoIndex,1);
        saveToDos(newToDos);
    }

    return(
        <TodoContext.Provider value={
            {
                loading,
                error,
                completedToDos,
                totalToDos,
                searchValue,
                setSearchValue,
                searchedToDos,
                completeToDo,
                deleteToDo,
                openModal,
                setOpenModal,
                addToDo,
                updateTodo,
                textInputModal,
                setTextInputModal
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, ToDoProvider };