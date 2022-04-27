import PatientInProject from "./PatientInProject";
import styles from "./Patients.module.css"
const PatientsInProject = (props) => {
    
    const patients=props.patients.map(patient => <PatientInProject
        projectID={props.projectID}
        id={patient.id}
        name={patient.name}
        lastName={patient.lastName}
        city={patient.city}
        street={patient.street}
        number={patient.number}
        apartment={patient.apartment}
        consent={patient.consent}
    >

    </PatientInProject>)
    return ( <table className={styles.patients}>
        <th>Imie</th>
      <th>Nazwisko</th>
      <th>Miasto</th>
      <th>Street</th>
      <th>Number</th>
      <th>Aparatment</th>
      <th>consent</th>
      <th>Action</th>
        {patients}
    </table> );
}
 
export default PatientsInProject;