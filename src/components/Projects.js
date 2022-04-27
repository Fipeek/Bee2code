import react, { useState } from "react";
import Project from "./Project";
import { useContext } from "react";
import ProjectContext from "../store/project-context";
import styles from './Patients.module.css';
import Backdrop from "./UI/Backdrop";
import ProjectForm from "./ProjectForm";

const Projects = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [sortType, setSortType] = useState("ascending");
  const [searchTerm,setSearchTerm] = useState("");
  const [searchField,setSearchField] = useState("name");
  const projectCtx = useContext(ProjectContext);
  const changeIsAdding = () =>{
      setIsAdding(!isAdding);
  }
  const filterChangeHandler = event =>{
    setSortType(event.target.value);
  }
  const searchFieldChangeHandler = event =>{
    setSearchField(event.target.value);
  }
  projectCtx.projects.sort(function(a,b){
    if(sortType==='ascending'){
      if(a.name.toLowerCase()< b.name.toLowerCase()){
        return -1;
      }
      if(a.name.toLowerCase()> b.name.toLowerCase()){
        return 1;
      }
    }
    if(sortType==="descending"){
      if(a.name.toLowerCase()< b.name.toLowerCase()){
        return 1;
      }
      if(a.name.toLowerCase()> b.name.toLowerCase()){
        return -1;
      }
    }
      return 0;
  });
   const projects =  projectCtx.projects.filter((project)=>{
     if(searchField === "name"){
       if(searchTerm === ""){
         return project;
       }
       else if(project.name.toLowerCase().includes(searchTerm.toLowerCase())){
         return project;
       }
     }
     if(searchField === "description"){
      if(searchTerm === ""){
        return project;
      }
      else if(project.description.toLowerCase().includes(searchTerm.toLowerCase())){
        return project;
      }
     }
   }).map(project => (<Project
    id={project.id}
    name={project.name}
    description={project.description}
    numberOfPatients={project.numberOfPatients}
    ></Project>))


    return (
      <div>
      <select onChange={filterChangeHandler}>
        <option value="ascending">ascending</option>
        <option value="descending">descending</option>
      </select>

      <select onChange={searchFieldChangeHandler}>
        <option value="name">name</option>
        <option value="description">description</option>
      </select>

      <input onChange={ (event) =>{
        setSearchTerm(event.target.value);
      }}></input>
        <table className={styles.patients}>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Number of patients</th>
          <th>Action</th>
        </tr>{projects}
        <tr><button className={styles.addPatient} onClick={changeIsAdding}>ADD</button></tr>
        { isAdding && <Backdrop><ProjectForm onClick={changeIsAdding}></ProjectForm></Backdrop>}
        </table>
      </div>
     );
}
 
export default Projects;