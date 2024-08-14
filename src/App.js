import logo from './logo.svg';
import './App.css';
import Header from './My Components/Header';
import { Todos } from './My Components/Todos';
import { Footer } from './My Components/Footer';
import { AddTodo } from './My Components/AddTodo';
import { About } from './My Components/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Routes"
  Route,
} from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Task Completed", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }
  const addtodo = (title, desc) => {
    console.log("Adding data")
    let sno;
    if (todos.length == 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    // ALWAYS WRAP THE RETURN STATEMENT OTHERWISE IT FAILS
    //its jsx basically want to write html mix of javascript
    <>
<BrowserRouter>
  <Header title="MyTodosList" SearchBar={true} />
  <Routes>
    <Route path="/" element={<>
      <AddTodo addtodo={addtodo} />
      <Todos todo={todos} onDelete={onDelete} />
    </>} />
    <Route path="/about" element={<About />} />
  </Routes>
  <Footer />
</BrowserRouter>

    </>
  );
}

export default App;
