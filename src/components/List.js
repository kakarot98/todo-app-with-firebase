import React, { useEffect, useState } from "react";
import firebase from "./firebase";
// import Task from "./Task";
import CompletedList from "./CompletedList";
import InCompletedList from "./InCompleteList";

const List = ({ project }) => {
  const [projName, setProjName] = useState("")  
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    console.log(project.id)
    setProjName(""+project.id)
    const todoRef = firebase.database().ref("ToDoList").child(project.id);
    console.log(typeof(projName))
    console.log(typeof(project.id))

    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      console.log(todos)
      
      const list = [];
      for (let id in todos) {
        list.push({ id, ...todos[id] });
      }
      // console.log(snapshot.val())
      setTodoList(list);
      console.log(list);
    });
    
    
  }, []);

  return (
    <div>
      <InCompletedList todoList={todoList} project={project.id} />
      <CompletedList todoList={todoList} project={project.id} />
    </div>
  );
};

export default List;
