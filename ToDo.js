import React from "react";
import { FaTimes } from "react-icons/fa";

const ToDo = ({ todo }) => {
  return (
    <div className={`task form-control-check ${todo.complete ? "strike" : ""}`}>
      {todo.task}
      <h3>
        {todo.text} <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>{todo.day}</p>
    </div>
  );
};

export default ToDo;
