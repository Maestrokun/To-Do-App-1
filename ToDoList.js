import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div className="form-control">
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button className="btn" style={{ margin: "10px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
