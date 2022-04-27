import react from "react";
import { useContext } from "react";
import ProjectContext from "../../store/project-context";
import SelectProject from "../SelectProject";
import Project from "../Project";
import { useState } from "react";
import PatientInProject from "../PatientInProject";
import PatientsInProject from "../PatientsInProject";
import AddingPatientsToProject from "../AddingPatientsToProject";
const ManageProjects = () => {
  const projectCtx = useContext(ProjectContext);
  const [areProjectsExisting,setAreProjectsExisiting] = useState(true);
  let firstProject ="";
  if(projectCtx.projects.length>0){
    firstProject=projectCtx.projects[0].name;
  }
  const [selectedProject, setSelectedProject] = useState(firstProject);
  if(projectCtx.projects.length === 0){
    return <div>
      <h1>There is no project yet :((, Add some first</h1>
    </div>
  }
  const project =projectCtx.projects.filter(
    (project) => project.name === selectedProject
  );
  const filteredProjects = projectCtx.projects.filter(
    (project) => project.name === selectedProject
  ).map(project =>(<Project
  id={project.id}
  name={project.name}
  description={project.description}
  numberOfPatients={project.numberOfPatients}
  ></Project>));
  const filterChangeHandler = (event) => {
    setSelectedProject(event.target.value);
  };
   const patients = project[0].patients;
   const projectID = project[0].id;
  const projects = projectCtx.projects.map((project) => (
    <SelectProject name={project.name} projectID={project.id}></SelectProject>
  ));
 

      return (
        <div>
          {areProjectsExisting &&
          <div>
          <select onChange={filterChangeHandler}>{projects}</select>
          <ul>
              {filteredProjects}
          </ul>
        <PatientsInProject projectID={projectID} patients={patients}></PatientsInProject>
        <AddingPatientsToProject projectID={projectID}></AddingPatientsToProject>
            </div>
          }
        </div>
      );
    
};

export default ManageProjects;
