import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([
    "Weak up 7:00",
    "Eat breakfast",
    "Learn",
  ]);

  const [newTask, setNewTask] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function add() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function remove(index) {
    const updateArray = tasks.filter((_, i) => i !== index)
    setTasks(updateArray)
  }

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-display">Todo List</h1>
      <input
        onChange={handleInputChange}
        className="todo-list-text-input"
        type="text"
      />
      <button onClick={add} className="todo-list-add" value={newTask}>
        Add
      </button>

        <ol>
          {tasks.map((task, index) => 
            <li key={index}>
              <span className="text">{task}</span>
              <button
                onClick={() => remove(index)}
                className="todo-list-delete"
              >
                Delete
              </button>
            </li>
          )}
        </ol>

      </div>
  );
}

export default TodoApp;
