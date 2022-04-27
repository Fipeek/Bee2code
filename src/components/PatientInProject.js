import styles from "./Patient.module.css";
import ProjectContext from "../store/project-context";
import { useContext, useState } from "react";
import PatientContext from "../store/patient-context";
const PatientInProject = (props) => {
  const projectCtx = useContext(ProjectContext);
  const patientCtx = useContext(PatientContext)
  const [consent,setConsent] = useState(props.consent);
  const removePatientFromProjectHandler = () =>{
    projectCtx.removePatientFromProject(props.id,props.projectID);
  }
  const changeConsentHandler =() =>{
    patientCtx.changeConsent(props.id, !consent);
    projectCtx.changePatientConsent(props.projectID,props.id,!consent);
    setConsent(!consent)
  }
  return (
    <tr className={styles.patient}> 
      <td>{props.name}</td>
      <td>{props.lastName + " "}</td>
      <td> {props.city + " "} </td>
      <td> {props.street + " "} </td>
      <td> {props.number + " "} </td>
      <td> {props.apartment + " "} </td>
      <td onClick={changeConsentHandler} className={consent ? styles.positive : styles.negative }>{consent ? 'yes' : "no"}</td>
      <td><button onClick={removePatientFromProjectHandler}>-</button></td>
     
    </tr>
   
  );
};

export default PatientInProject;
