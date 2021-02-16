import React, { useState } from "react";
import firebase from "./firebase";
import { Container, TextField, Button } from "@material-ui/core";
import {AddCircleOutlineRounded} from "@material-ui/icons"

const Form = () => {
  const [text, setText] = useState("");

  const createTodo = () => {
    const db = firebase.database().ref()
    console.log(db)
    const todoRef = firebase.database().ref("ToDo");
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
