import styles from './Patients.module.css';
import GeneratingPatientInProjects from './GeneratingPatientInProjects';
import PatientContext from '../store/patient-context';
import { useContext } from 'react';
const AddingPatientsToProject = (props) => {
    const patientCtx = useContext(PatientContext);
    const patients = patientCtx.patients.map(patient => <GeneratingPatientInProjects
        projectID={props.projectID}
        id={patient.id}
        name={patient.name}
        lastName={patient.lastName}
        city={patient.city}
        street={patient.street}
        number={patient.number}
        apartment={patient.apartment}
    >

    </GeneratingPatientInProjects>)
  return (
    <table className={styles.patients}>
      <tr>
        <th>Imie</th>
        <th>Nazwisko</th>
        <th>Miasto</th>
        <th>Street</th>
        <th>Number</th>
        <th>Aparatment</th>
        <th>Action</th>
      </tr>
      {patients}
    </table>
  );
};

export default AddingPatientsToProject;
