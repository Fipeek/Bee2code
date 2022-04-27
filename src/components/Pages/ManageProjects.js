import react from "react";
import { useContext } from "react";
import ProjectContext from "../../store/project-context";
import SelectProject from "../SelectProject";
import Project from "../Project";
import { useState } from "react";
import PatientInProject from "../PatientInProject";
import PatientsInProject from "../PatientsInProject";
import AddingPatientsToProject from "../AddingPatientsToProject";
import ErrorModal from "../ErrorModal";
import Backdrop from "../UI/Backdrop";
import Card from "../UI/Card";
import styles from '../Select.module.css';
const ManageProjects = () => {
  const projectCtx = useContext(ProjectContext);
  const [isError, setIsError] = useState(true);
  let firstProject = "";
  const closeErrorModal = () => {
    setIsError(false);
  };
  if (projectCtx.projects.length > 0) {
    console.log("xddd");
    firstProject = projectCtx.projects[0].name;
  }
  const [selectedProject, setSelectedProject] = useState(firstProject);
  if (projectCtx.projects.length === 0) {
    return (
      <div>
        {isError && (
          <ErrorModal
            onClick={closeErrorModal}
            errorMessage={"Najpierw dodaje projekty :)"}
          ></ErrorModal>
        )}
      </div>
    );
  }

  const project = projectCtx.projects.filter(
    (project) => project.name === selectedProject
  );
  const filteredProjects = projectCtx.projects.filter(
    (project) => project.name === selectedProject
  );
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
      <div>
        <div className={styles.select}>

        <label>Choose Project </label>
        <select onChange={filterChangeHandler}>{projects}</select>
        </div>
        <Card
        title={"Patients in " + project[0].name}>
          <div></div>
          {project[0].patients.length === 0 ? (
            <h1>There are no patients in this project</h1>
          ) : (
            <PatientsInProject
              projectID={projectID}
              patients={patients}
            ></PatientsInProject>
          )}
        </Card>
        <Card
        title="All Patients">
        <AddingPatientsToProject
          projectID={projectID}
          ></AddingPatientsToProject>
          </Card>
      </div>
    </div>
  );
};

export default ManageProjects;
