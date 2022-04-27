import { useContext } from "react";
import PatientContext from "../store/patient-context";
import ProjectContext from "../store/project-context";
import TestContext from "../store/test-contex";
import styles from './Stats.module.css';

const Stats = () => {
    const patientCtx = useContext(PatientContext);
    const projectCtx = useContext(ProjectContext);
    const testCtx  = useContext(TestContext);
    const numberOfPatients = patientCtx.patients.length;
    const numberOfProjects = projectCtx.projects.length;
    const numberOfTests = testCtx.tests.length;
    return ( <div className={styles.stats}>
        <p>Number of patients {numberOfPatients}</p>
        <p>Number of projects: {numberOfProjects}</p>
        <p>Number of tests: {numberOfTests}</p>
    </div> );
}
 
export default Stats;