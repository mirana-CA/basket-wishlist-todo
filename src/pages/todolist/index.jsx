import React, { useState } from "react";
import useLocal from "../../hooks/localhook/useLocal";
import "./index.scss";

const ToDoList = () => {
  let [inp, setInp] = useLocal("inp", "");
  let [todo, setTodo] = useLocal("todo", []);

  const addTodo = function (e) {
    e.preventDefault();
    setTodo([...todo, inp]);
    setInp("");
  };
  const deleteFromTodoList = function (item) {
    setTodo(todo.filter((x) => x != item));
  };
  return (
    <div className="todo_page">
      <h1>ToDoList</h1>
      <form onSubmit={(e) => addTodo(e)}>
        <input
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button className="btn btn-outline-info">Add</button>
      </form>
      <ul>
        {todo.map((item, i) => (
          <li key={i}>
            {item}
            <p></p>
            <button
              className="btn btn-danger"
              onClick={() => deleteFromTodoList(item)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
