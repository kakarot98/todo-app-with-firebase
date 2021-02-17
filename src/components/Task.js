import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import {
  Button,
  Checkbox,
  TextField,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Dialog,
  DialogContent,
  DialogActions,
  ListItemIcon,
} from "@material-ui/core";
import { DeleteOutlineRounded, Edit } from "@material-ui/icons";

const Task = ({ todo, project }) => {
  const [checkBoxValue, setCheckBoxValue] = useState(todo.complete);
  const [parentName, setParentName] = useState("");
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState("");
  const [toUpdateId, setToUpdateId] = useState("");

  useEffect(() => {
    setParentName(project);
    return () => {};
  }, []);

  const openUpdateDialogue = (todo) => {
    setOpen(true);
    setToUpdateId(todo.id);
    setUpdate(todo.text);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteTask = () => {
    const todoRef = firebase
      .database()
      .ref("ToDoList")
      .child(parentName)
      .child(todo.id);
    todoRef.remove();
  };

  const updateTask = () => {
    const todoRef = firebase
      .database()
      .ref("ToDoList")
      .child(parentName)
      .child(todo.id);
    todoRef.update({
      text: update,
    });
    setOpen(false);
  };

  const completeTask = () => {
    const todoRef = firebase
      .database()
      .ref("ToDoList")
      .child(parentName)
      .child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
    setCheckBoxValue(todo.complete);
  };

  return (
    <div>
      <ListItem key={todo.id} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            disableRipple
            checked={checkBoxValue}
            onChange={completeTask}
          />
        </ListItemIcon>

        <ListItemText primary={todo.text} />

        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="Edit"
            onClick={() => openUpdateDialogue(todo)}
          >
            <Edit />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="Delete"
            onClick={() => deleteTask()}
          >
            <DeleteOutlineRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            label="Update Todo"
            type="text"
            fullWidth
            name="updateTodo"
            value={update}
            onChange={(event) => setUpdate(event.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={updateTask}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Task;
