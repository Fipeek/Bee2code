import Tests from '../Tests';
import AddTestButton from '../AddTestButton';
import { useContext, useState } from 'react';
import TestForm from '../TestForm';
import Backdrop from '../UI/Backdrop';
import SelectProject from '../SelectProject';
import ProjectContext from '../../store/project-context';
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
      <div>
        <select onChange={filteredProjectNameHandler}>
          <option  selected>Choose Project</option>
          {projects}
        </select>
        <Tests projectName={filteredProjectName}></Tests>
        <AddTestButton onClick={setIsAddingHandler}></AddTestButton>
      {isAdding && <Backdrop> <TestForm onClick={setIsAddingHandler}></TestForm></Backdrop>}
      </div>
      );
}
 
export default TestsPage;