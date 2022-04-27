import styles from "./Patient.module.css";
import ProjectContext from "../store/project-context";
import { useContext } from "react";
const GeneratingPatientInProjects = (props) => {
    const projectCtx = useContext(ProjectContext);
    const projectID = props.projectID;
    const patient = {
        id: props.id,
          name: props.name,
          lastName: props.lastName,
          city: props.city,
          street: props.street,
          number: props.number,
          apartment: props.apartment,
    };
    const addPatientToProjectHandler = () =>{
        projectCtx.addPatientToProject(projectID,patient);
    }


  return (
    <tr className={styles.patient}>
      <td>{props.name}</td>
      <td>{props.lastName + " "}</td>
      <td> {props.city + " "} </td>
      <td> {props.street + " "} </td>
      <td> {props.number + " "} </td>
      <td> {props.apartment + " "} </td>
      <td>
        <button onClick={addPatientToProjectHandler}>+</button>
      </td>
    </tr>
  );
};

export default GeneratingPatientInProjects;
