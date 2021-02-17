import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Container, TextField, Button } from "@material-ui/core";
import { AddCircleOutlineRounded } from "@material-ui/icons";

const Form = ({ projectName }) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setName(projectName);
  });

  const createTodo = () => {
    const todoRef = firebase.database().ref("ToDoList").child(name);
    const todo = {
      text,
      complete: false,
    };

    todoRef.push(todo);
    setText("");
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="todo"
            label="Enter ToDo"
            name="todo"
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={createTodo}
            disabled={!text}
            startIcon={<AddCircleOutlineRounded />}
          >
            Add Todo
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Form;
