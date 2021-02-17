import React, { useEffect, useState } from "react";
import Task from "./Task";
import { List, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CompletedList = ({ todoList, project }) => {
  const [projName, setProjName] = useState("");

  useEffect(() => {
    setProjName(project);
    //console.log(project)
    return () => {};
  }, []);
  const listStyle = useStyles();
  return (
    <div>
      <h3>Completed Tasks</h3>
      <Paper style={{ maxHeight: 200, overflow: "auto" }}>
        <List className={listStyle.root}>
          {todoList ? (
            todoList.map((todo, index) => {
              if (todo.skip) {
                return;
              }
              if (todo.complete) {
                return <Task todo={todo} project={projName} key={index} />;
              }
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </List>
      </Paper>
    </div>
  );
};

export default CompletedList;
