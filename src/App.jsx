import "./App.css";
import Header from "./myComponents/Header.jsx";
import Todos from "./myComponents/Todos.jsx";
import Addto from "./myComponents/Addto.jsx";
import { Outlet } from "react-router";
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // Handles deleting a todo (matches your 'ondelete' prop lowercase naming)
  const ondelete = (todo) => {
    console.log("Deleting todo:", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  // Handles adding a todo (matches your 'addTodo' method call in Addto.js)
  const addTodo = (title, desc) => {
    console.log("Adding todo:", title, desc);
    let SN;
    if (todos.length === 0) {
      SN = 1;
    }
    else {
      SN = todos[todos.length - 1].SN + 1; // Generates unique serial number matching your todo.SN
    }
    const myTodo = {
      SN: SN,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);

  // Sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return ( 
    <> 
      {/* title defaults to your string, searchbar matches your exact lowercase prop layout */}
      <Header searchbar={true} /> 
  
      <div className="container my-3">
        <Outlet context={{todos, addTodo, ondelete}}/>
      </div>
    
    </>
  );
}

export default App;