import styles from './Patient.module.css';
import PatientContext from '../store/patient-context';
import react from "react";
import { useContext } from 'react';
const Patient = (props) => {
  const patientCtx = useContext(PatientContext);
  return (
    <tr className={styles.patient}>
      <td>
        {props.name} 
      </td>
      <td>
      {props.lastName + " "}
      </td>
         <td> {props.city + " "}    </td>
         <td>  {props.street + " "} </td>
         <td>  {props.number + " "} </td>
         <td>  {props.apartment + " "} </td>
         <td><button >delete</button> <button>edit</button></td>
     
    </tr>
  );
};

export default Patient;
