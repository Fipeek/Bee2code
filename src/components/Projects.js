import react, { useState } from "react";
import Project from "./Project";
import { useContext } from "react";
import ProjectContext from "../store/project-context";
import styles from './Patients.module.css';
import Backdrop from "./UI/Backdrop";
import ProjectForm from "./ProjectForm";

const Projects = () => {
    const projectCtx = useContext(ProjectContext);

   const projects =  projectCtx.projects.map(project => (<Project
    id={project.id}
    name={project.name}
    description={project.description}
    numberOfPatients={project.numberOfPatients}
    ></Project>))

    const [isAdding, setIsAdding] = useState(false);

    const changeIsAdding = () =>{
        setIsAdding(!isAdding);
    }
    return (
        <table className={styles.patients}>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Number of patients</th>
          <th>Action</th>
        </tr>{projects}
        <tr><button className={styles.addPatient} onClick={changeIsAdding}>ADD</button></tr>
        { isAdding && <Backdrop><ProjectForm onClick={changeIsAdding}></ProjectForm></Backdrop>}
        </table>
     );
}
 
export default Projects;