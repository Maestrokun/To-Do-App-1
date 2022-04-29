import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState({
    task: "",
    day: "",
  });

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");

    if (!userInput) {
      alert("Please add a task");
    }
  };

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>ToDo</label>
          <input
            className="add-form form-control-check label"
            value={userInput.task}
            type="text"
            onChange={handleChange}
            placeholder="Enter task..."
          />
          <input
            className="add-form form-control-check label"
            value={userInput.day}
            type="text"
            onChange={handleChange}
            placeholder="Pick a Date..."
          />
        </div>

        <button className="btn btn-block">Submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;
