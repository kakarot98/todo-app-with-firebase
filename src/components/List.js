import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import Task from './Task'
import CompletedList from './CompletedList'
import InCompletedList from './InCompleteList'


const List = () => {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref("ToDo");

    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      console.log(todos)
      const list = [];
      for (let id in todos) {
        list.push({id, ...todos[id]});
      }
      /*console.log(snapshot.val())*/
      setTodoList(list);
      console.log(list);
    });
    /*retriveList()*/
  }, []);

  return (
    <div>
      <CompletedList todoList={todoList}/>
      <InCompletedList todoList={todoList}/>
      
      
      {/*todoList ? (
        todoList.map((todo, index) => <Task todo={todo} key={index}/>)
      ) : (
        <h1>Loading...</h1>
      )*/}
    </div>
  );
};

export default List;
