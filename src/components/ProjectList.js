import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import Project from "./Project";

const ProjectList = () => {
  const [projectList, setProjectList] = useState();

  useEffect(() => {
    const projRef = firebase.database().ref("ToDoList");

    projRef.on("value", (snapshot) => {
      const projs = snapshot.val();
      const listOfProjs = [];
      for (let id in projs) {
        listOfProjs.push({ id, ...projs[id] });
      }
      setProjectList(listOfProjs);
      console.log(listOfProjs);
    });
  }, []);

  return (
    <div>
      {projectList
        ? projectList.map((project, index) => (
            <Project project={project} key={index} />
          ))
        : ""}
    </div>
  );
};

export default ProjectList;
