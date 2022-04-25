import ProjectContext from "./project-context";
import react from "react";
import { useReducer } from "react";
const DUMMY_PROJECTS = [{
    id: Math.random(),
    name: "test",
    description: "testowy opis projektu",
    numberOfPatients: 0,
    patients: [],
},{
    id: Math.random(),
    name: "test2",
    description: "testowy opis projektu",
    numberOfPatients: 0,
    patients: [],
},{
    id: Math.random(),
    name: "test3",
    description: "testowy opis projektu",
    numberOfPatients: 0,
    patients: [],
},]
const defaultProjectsState ={
    projects: DUMMY_PROJECTS
}
const projectReducer = (state,action)=>{
    if(action.type === "ADD_PROJECT"){
        const updatedProjects = state.projects.concat(action.project);
        return {
            projects: updatedProjects
        }
    }
    if(action.type === "REMOVE_PROJECT"){
        const updatedProjects = state.projects.filter(project => project.id != action.id);
        return{
            projects: updatedProjects,
        }
    }
    if(action.type === "EDIT_PROJECT"){
     const updatedProjects = state.projects;
     const projectIndex = state.projects.findIndex(
         project => project.id === action.id
     );
     console.log("NAME: " + action.name);
     console.log("DESC: " + action.description);
     updatedProjects[projectIndex].name =action.name;  
     updatedProjects[projectIndex].description   = action.description;
     return {
         projects: updatedProjects,
     }
    }

    return defaultProjectsState;
}
const ProjectProvider = (props) => {
    const [projectState,dispatchProjectAction] = useReducer(projectReducer,defaultProjectsState);
    const addProjectHandler = project =>{
        dispatchProjectAction({type:"ADD_PROJECT",project: project})
    }
    const removeProjectHandler = (id) =>{
        dispatchProjectAction({type:"REMOVE_PROJECT", id:id})
    }
    const editProjectHandler = (id, name, description) =>{
        dispatchProjectAction({type:"EDIT_PROJECT", id:id,name:name,description:description})
    }
    const projectContext = {
        projects: projectState.projects,
        addProject:addProjectHandler,
        removeProject:removeProjectHandler,
        editProject:editProjectHandler
    }
    return ( <ProjectContext.Provider value={projectContext}>
        {props.children}
    </ProjectContext.Provider> );
}
 
export default ProjectProvider;