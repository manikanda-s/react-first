import React, { useState } from "react";
import "./styles.css";
import InputBox from "./components/InputBox";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <InputBox setTodos={setTodos} />
      <br />
      <h1> {todos} </h1>
    </div>
  );
}
