import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Container, TextField, Button } from "@material-ui/core";
import { AddCircleOutlineRounded } from "@material-ui/icons";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");

  const createProject = () => {
    const projRef = firebase.database().ref("ToDoList");
    projRef.child(projectName).set({
      skip: true,
    });

    setProjectName("");
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
            id="project"
            label="Enter project"
            name="project"
            autoFocus
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={createProject}
            disabled={!projectName}
            startIcon={<AddCircleOutlineRounded />}
          >
            Add Project
          </Button>
        </form>
      </Container>      
    </div>
  );
};

export default ProjectForm;
