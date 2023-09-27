import React, { useState } from "react";

export default function InputBox({ setTodos }) {
  //   console.log("hk");
  const [data, setData] = useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleClick = (event) => {};
  setTodos((prev) => {
    return [...prev, data];
  });
  return (
    <div className="inputBox">
      <form>
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
}
