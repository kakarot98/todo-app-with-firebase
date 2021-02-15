import React, { useEffect, useState } from "react";
import firebase from "./firebase";

const Task = ({ todo }) => {
  const [checkBoxValue, setCheckBoxValue] = useState(todo.complete)

  useEffect(()=>{
    setCheckBoxValue(todo.complete)

  },[])
  
  const deleteTask = () => {
    const todoRef = firebase.database().ref("ToDo").child(todo.id);
    todoRef.remove()
  };

  const completeTask = () => {
    const todoRef = firebase.database().ref("ToDo").child(todo.id)
    todoRef.update({
      complete: !todo.complete
    })

    setCheckBoxValue(todo.complete)
    console.log(checkBoxValue)
  }

  return (
    <div>
      <input type="checkbox"  name="" id="" checked={checkBoxValue}  onChange={completeTask} />
      <h3>{todo.text}</h3>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
