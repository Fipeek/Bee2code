import styles from "./Patient.module.css";
import PatientContext from "../store/patient-context";
import react, { useState } from "react";
import { useContext } from "react";
import AddPatientForm from "./AddPatientForm";
import Backdrop from "./UI/Backdrop";
const Patient = (props) => {
  const patientCtx = useContext(PatientContext);
  const [isEditingPatient, setIsEditingPatient] = useState(false);
  const id = props.id;
  const removePatientHandler = () => {
    patientCtx.removePatient(id);
  };
  const editPatient = () => {
    setIsEditingPatient(!isEditingPatient);
  };

  return (
    <tr className={styles.patient}>
      <td>{props.name}</td>
      <td>{props.lastName + " "}</td>
      <td> {props.city + " "} </td>
      <td> {props.street + " "} </td>
      <td> {props.number + " "} </td>
      <td> {props.apartment + " "} </td>
      <td>
        <button onClick={removePatientHandler}>delete</button>{" "}
        <button onClick={editPatient}>edit</button>
        {isEditingPatient && <Backdrop>
          <AddPatientForm
            name={props.name}
            lastName={props.lastName}
            city={props.city}
            street={props.street}
            number={props.number}
            apartment={props.apartment}
            onClick={editPatient}
            patientID={id}
          ></AddPatientForm>
        </Backdrop>}
      </td>
    </tr>
  );
};

export default Patient;
