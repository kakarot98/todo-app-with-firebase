import React, { useState } from "react";
import firebase from "./firebase";

const Form = () => {
  const [text, setText] = useState("");

  const createTodo = () => {
    const todoRef = firebase.database().ref("ToDo");
    const todo = {
      text,
      complete: false
    };

    todoRef.push(todo);
    setText('')
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={createTodo}>Add</button>
    </div>
  );
};

export default Form;
