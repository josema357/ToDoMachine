import "./ToDoSearch.css";
import search from "../assets/icons/search.svg";

function ToDoSearch({searchValue, setSearchValue}) {
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
