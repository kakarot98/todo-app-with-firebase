import React from "react";
import Task from "./Task";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const InCompleteList = ({ todoList }) => {
    const listStyle = useStyles();
  return (
    <div>
      <h3>Pending</h3>
      <List className={listStyle.root}>
        {todoList ? (
          todoList.map((todo, index) => {
            if (!todo.complete) {
              return <Task todo={todo} key={index} />;
            }
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </List>
    </div>
  );
};

export default InCompleteList;
