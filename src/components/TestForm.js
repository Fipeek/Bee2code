import { useContext, useRef, useState } from "react";
import ProjectContext from "../store/project-context";
import styles from "./Form.module.css";
import SelectProject from "./SelectProject";
import SelectPatient from "./SelectPatient";
import TestContext from "../store/test-contex";
import PatientContext from "../store/patient-context";
import ErrorModal from "./ErrorModal";
const TestForm = (props) => {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const resultInputRef = useRef();
  const patientInputRef = useRef();
  const projectInputRef = useRef();
  const testStateRef = useRef();
  const testCtx = useContext(TestContext);
  const projectCtx = useContext(ProjectContext);
  const patientCtx = useContext(PatientContext);
  const [isTestDone, setIsTestDone] = useState(true);

  let firstProjectName ="";
  if(projectCtx.projects.length>0){
    firstProjectName=projectCtx.projects[0].name;
  }
  const [selectedProject, setSelectedProject] = useState(
    firstProjectName
  );
  if(projectCtx.projects.length === 0 ){
      return(

          <div> 
          <h1>No projects yet, add some :((</h1>
      </div>
          ) 
  }
  if(patientCtx.patients.length === 0 ) {
      return (
       <ErrorModal errorMessage={"No pacient detected, add some"} onClick={props.onClick}></ErrorModal>
      )
  }
  const testStateHandler = (event) => {
    if (event.target.value === "true") {
      setIsTestDone(true);
    } else {
      setIsTestDone(false);
    }
  };
  const projects = projectCtx.projects.map((project) => (
    <SelectProject name={project.name} projectID={project.id}></SelectProject>
  ));
  const selectedProjectHandler = (event) => {
    setSelectedProject(event.target.value);
  };
  const patients = projectCtx.projects
    .filter((project) => project.name === selectedProject)[0]
    .patients.filter((patient) => patient.consent === true)
    .map((patient) => (
      <SelectPatient
        id={patient.id}
        name={patient.name}
        lastName={patient.lastName}
      ></SelectPatient>
    ));

  const submitHandler = (event) => {
    event.preventDefault();
    const project = projectCtx.projects.filter(
      (project) => project.name === selectedProject
    )[0];
    const patientID = +patientInputRef.current.value;

    const patients = patientCtx.patients.filter(
      (patient) => patient.id === patientID
    );
        let result =""
    if(resultInputRef.current === null){
      result = "not done yet!";
    }
    else{
      result=resultInputRef.current.value;
    }
    if(result.trim().length === 0 ||  nameInputRef.current.value.trim().length !== 0 || patients[0]===undefined || descriptionInputRef.current.value.trim().length !== 0){
      if (props.id == undefined) {
      const test = {
        id: Math.random(),
        name: nameInputRef.current.value,
        patient: patients[0],
        project: project,
        description: descriptionInputRef.current.value,
        result: result,
        done: true,
      };
      if(patients[0] !== undefined){
       

        testCtx.addTest(test);
      }
    } 
    else {
      const test = {
        id: props.id,
        name: nameInputRef.current.value,
        patient: patients[0],
        project: project,
        description: descriptionInputRef.current.value,
        result: resultInputRef.current.value,
        done: true,
      };
      testCtx.editTest(props.id, test, test.project, test.patient);
    }
    
  }
  };

  return (
        <form onSubmit={submitHandler} className={styles.form}>
      <label>Name</label>
      <input defaultValue={props.name} ref={nameInputRef}></input>
      <label>description</label>
      <input defaultValue={props.description} ref={descriptionInputRef}></input>
      {isTestDone && <label>result</label>}
      {isTestDone && (
        <input defaultValue={props.result} ref={resultInputRef}></input>
      )}
      <label>select project name</label>
      <select
        defaultValue={props.projectName}
        onChange={selectedProjectHandler}
        ref={projectInputRef}
      >
        {projects}
      </select>
      <label>Select patient</label>
      <select
        defaultValue={props.patientName + " " + props.patientLastName}
        ref={patientInputRef}
      >
        {patients}
      </select>
      <label>is test done</label>
      <select
        defaultValue={props.testState}
        onChange={testStateHandler}
        ref={testStateRef}
      >
        <option value={true}>done</option>
        <option value={false}>not done </option>
      </select>
      <span onClick={props.onClick}>X</span>
      <button type="submit"> add</button>
    </form>
  );
};

export default TestForm;
