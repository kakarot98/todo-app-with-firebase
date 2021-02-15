import React from "react";
import firebase from "./firebase";

const Task = ({ todo }) => {

  const deleteTask = () => {
    const todoRef = firebase.database().ref("ToDo").child(todo.id);
    todoRef.remove()
  };

  const completeTask = () => {
    const todoRef = firebase.database().ref("ToDo").child(todo.id)
    todoRef.update({
      complete: !todo.complete
    })
  }

  return (
    <div>
      <input type="checkbox" name="" id="" onChange={completeTask}/>
      <h3>{todo.text}</h3>
      <button onClick={deleteTask}>Delete</button>      
      
    </div>
  );
};

export default Task;
