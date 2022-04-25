import styles from "./Form.module.css";
import ProjectContext from '../store/project-context';
import { useContext, useRef } from 'react';
const formValidator = (name,description) =>{
    if(name.trim().length === 0 || description.trim().length === 0){
        return false;
    }
    else{
        return true;
    }
}
const ProjectForm = (props) => {

    const projectCtx = useContext(ProjectContext);
    
    const submitHandler = (event) =>{
        event.preventDefault();
         const isFormValid = formValidator(nameInputRef.current.value,descriptionInputRef.current.value);
         if(isFormValid){
             if(props.projectID !== undefined){
                 projectCtx.editProject(props.projectID,nameInputRef.current.value,descriptionInputRef.current.value);
             }
             else{
                 const project = {
                     id: Math.random(),
                     name: nameInputRef.current.value,
                     description: descriptionInputRef.current.value,
                     patients: [],
                     numberOfPatients: 0,
                 }
                 projectCtx.addProject(project);
             }
         }
    }

    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    return (<form onSubmit={submitHandler} className={styles.form}>
        <label>Name</label>
        <input ref={nameInputRef} defaultValue={props.name}></input>
        <label>Description</label>
        <input ref={descriptionInputRef} defaultValue={props.description}></input>
        <button type='submit'>Submit</button>
        <span onClick={props.onClick}>X</span>
    </form>  );
}
 
export default ProjectForm;