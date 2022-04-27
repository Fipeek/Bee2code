import styles from './Patients.module.css';
import TestContext from '../store/test-contex';
import Test from './Test';
import { useContext, useState } from 'react';
import TestForm from './TestForm';
const Tests = (props) => {
    const testCtx = useContext(TestContext);
    const filteredProject = props.filteredYear;
    let tests = testCtx.tests.filter(test=> test.project.name == props.projectName).map(test => (<Test
    id={test.id}
    name={test.name}
    description={test.description}
    patient={test.patient}
    project={test.project}
    result={test.result}
    done={test.done}
    >
        

    </Test>));
    if(props.projectName==""){
        tests=testCtx.tests.map(test => (<Test
            id={test.id}
            name={test.name}
            description={test.description}
            patient={test.patient}
            project={test.project}
            result={test.result}
            done={test.done}
            >
                
        
            </Test>));
    }
    return ( 
    <div>
        {tests.length ===0 ? <h1> No tests found for this project, go Add some :)</h1> :
        <table className={styles.patients}>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Project Name</th>
            <th>test</th>
            <th>test description</th>
            <th>test result</th>
            <th>Action</th>
        </tr>{tests}
    </table>
        
        }
    
    </div>
     );
}
 
export default Tests;