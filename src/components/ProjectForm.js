import React, { useState,useEffect } from "react";
import firebase from "./firebase"
import ProjectList from './ProjectList'

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");

  const createProject = () => {
    const projRef = firebase.database().ref("ToDoList");
    projRef.child(projectName).set({
      skip:true,
      // date: 
    })
    // const proj = {projectName: {
                  
    //   skip: true
    // }}

    // projRef.push(proj);

    setProjectName("")
  };

  return (
    <div>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <button onClick={createProject}>Add Project</button>
      
      
    </div>
  );
};

export default ProjectForm;
