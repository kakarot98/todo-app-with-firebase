import React from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import firebase from "./firebase";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Welcome {firebase.auth().currentUser.displayName}
            </Typography>
            <Button onClick={()=> firebase.auth().signOut()}>Sign Out</Button>
          </Toolbar>
        </AppBar>
      </div>

      <Card variant="outlined">
        <CardContent>
          <ProjectForm />
          <ProjectList />
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
