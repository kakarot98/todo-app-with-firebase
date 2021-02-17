import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Project = ({ project }) => {
  const [projectName, setProjectName] = useState();
  useEffect(() => {
    setProjectName(project.id);
    return () => {};
  }, [project]);

  const classes = useStyles();

  return (
    <div>
      <Card variant="outlined" className={classes.root}>
        <CardContent>
          <h1>{projectName}</h1>
          <Form projectName={projectName} />
          <List project={project} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Project;
