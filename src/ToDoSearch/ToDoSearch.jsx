import "./ToDoSearch.css";
import search from "../assets/icons/search.svg";
import { useContext } from "react";
import { TodoContext } from "../Context/ToDoContext";

function ToDoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);
  return (
    <div className="input-container">
      <input
        className="input-search"
        placeholder="Buscar ..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <img src={search} alt="search" />
    </div>
  );
}

export { ToDoSearch };
