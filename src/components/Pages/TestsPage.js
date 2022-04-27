import Tests from '../Tests';
import AddTestButton from '../AddTestButton';
import { useContext, useState } from 'react';
import TestForm from '../TestForm';
import Backdrop from '../UI/Backdrop';
import SelectProject from '../SelectProject';
import ProjectContext from '../../store/project-context';
import styles from '../Select.module.css';
import styles2 from '../TestsPage.module.css';
const TestsPage = () => {
    const [isAdding,setIsAdding] = useState(false);
    const [filteredProjectName,setFilteredProjectName] = useState('');
    const setIsAddingHandler = () =>{
      setIsAdding(!isAdding);
    }
    const filteredProjectNameHandler = (event)=>{
      if(event.target.value!=="Choose Project"){
        setFilteredProjectName(event.target.value);
      }
      else{
        
      }
    }
    const projectsCtx = useContext( ProjectContext);
    const projects = projectsCtx.projects.map(project => (<SelectProject
    name={project.name}
    ></SelectProject>))
    return ( 
      <div  className={styles2.testsPage}>
        
        <select className={styles.select} onChange={filteredProjectNameHandler}>
          <option  selected value="">Choose Project</option>
          {projects}
        </select>
        <Tests projectName={filteredProjectName}></Tests>
      {isAdding && <Backdrop> <TestForm onClick={setIsAddingHandler}></TestForm></Backdrop>}
        <AddTestButton onClick={setIsAddingHandler}></AddTestButton>
      </div>
      );
}
 
export default TestsPage;