import { useContext, useState } from 'react';
import styles from './Patient.module.css';
import ProjectContext from '../store/project-context';
import ProjectForm from './ProjectForm';
import Backdrop from "./UI/Backdrop";
import ReactDOM from "react-dom";
const Project = (props) => {
    const projectCtx = useContext(ProjectContext);
    const [isEditingProject, setIsEditingProject] = useState(false);
    const projectID = props.id;
    const removeProjectHandler = () =>{
        projectCtx.removeProject(projectID);
    }
    const editProject = () =>{
        setIsEditingProject(!isEditingProject);
    }
    return ( <tr className={styles.patient}>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.numberOfPatients}</td>
        <td>
            <button onClick={removeProjectHandler}>delete</button>
            <button onClick={editProject}>edit</button>
            {ReactDOM.createPortal(isEditingProject && <Backdrop>
            <ProjectForm
            name={props.name}
            description={props.description}
            onClick={editProject}
            projectID={props.id}
            ></ProjectForm>
                </Backdrop>,document.getElementById('backdrop'))}
    
        </td>
    </tr> );
}
 
export default Project;