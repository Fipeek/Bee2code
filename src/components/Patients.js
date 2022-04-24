import react from "react";
import Patient from "./Patient";
import { useContext } from "react";
import PatientContext from "../store/patient-context";
import styles from './Patients.module.css';
import { Fragment } from "react";
import { useState } from "react";
import AddPatientForm from "./AddPatientForm";
import Backdrop from "./UI/Backdrop";

const Patients = () => {
  const [isAdding,setIsAdding] = useState(false);
  const setIsAddingHandler = () =>{ 
    setIsAdding(!isAdding);
  }
  const patientCtx = useContext(PatientContext);


  const patients = patientCtx.patients.map((patient) => (
    <Patient
      name={patient.name}
      lastName={patient.lastName}
      city={patient.city}
      street={patient.street}
      number={patient.number}
      apartment={patient.apartment}
    ></Patient>
  ));
  return(

    <div>
    { isAdding && <Backdrop>
      <AddPatientForm onClick={setIsAddingHandler}></AddPatientForm>
      </Backdrop>}
  <table className={styles.patients}>
    <tr>
      <th>Imie</th>
      <th>Nazwisko</th>
      <th>Miasto</th>
      <th>Street</th>
      <th>Number</th>
      <th>Aparatment</th>
      <th>Action</th>
    </tr>{patients}
    <tr><button onClick={setIsAddingHandler} className={styles.addPatient}>ADD</button></tr>
    </table>
    
    
  </div>
    ) 
   
};

export default Patients;
