import React,{useEffect, useState} from 'react'
import firebase from "./firebase";

const Projects = () => {
    const [project, setProject] = useState('')
    
    const addProject = () => {
        const todoRef = firebase.database().ref()
    }

    useEffect(()=>{

    })
    
    return (
        <div>
            <input type="text"/>
            <button>Add project</button>
        </div>
    )
}

export default Projects
