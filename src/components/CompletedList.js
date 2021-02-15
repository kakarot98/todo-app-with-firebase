import React from "react";
import Task from './Task'

const CompletedList = ({ todoList }) => {
  return (
    <div>
      <h1>Completed Tasks</h1>
      {todoList ? (
        todoList.map((todo, index) => {
            if(todo.complete){return <Task todo={todo} key={index}/>}
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default CompletedList;
