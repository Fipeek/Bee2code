import ProjectContext from "./project-context";
import react from "react";
import { useReducer } from "react";
const DUMMY_PROJECTS = [
  {
    id: 1,
    name: "Morfologia",
    description: "Badanie kriw ",
    numberOfPatients: 0,
    patients: [],
  },
  {
    id: 2,
    name: "Echo serca",
    description: "Badanie serca",
    numberOfPatients: 0,
    patients: [],
  },
  {
    id: 3,
    name: "Tomografia Głowy",
    description: "Badanie głowy",
    numberOfPatients: 0,
    patients: [],
  },
];
const defaultProjectsState = {
  projects: DUMMY_PROJECTS,
};
const projectReducer = (state, action) => {
  if (action.type === "ADD_PROJECT") {
    const updatedProjects = state.projects.concat(action.project);
    return {
      projects: updatedProjects,
    };
  }
  if (action.type === "REMOVE_PROJECT") {
    const updatedProjects = state.projects.filter(
      (project) => project.id != action.id
    );
    return {
      projects: updatedProjects,
    };
  }
  if (action.type === "EDIT_PROJECT") {
    const updatedProjects = state.projects;
    const projectIndex = state.projects.findIndex(
      (project) => project.id === action.id
    );
    updatedProjects[projectIndex].name = action.name;
    updatedProjects[projectIndex].description = action.description;
    return {
      projects: updatedProjects,
    };
  }
  if (action.type === "REMOVE_PATIENT_FROM PROJECT") {
    const projectIndex = state.projects.findIndex(
      (project) => project.id === action.projectID
    );

    let updatedProjects = state.projects;

    const newPatients = updatedProjects[projectIndex].patients.filter(
      (patient) => patient.id !== action.patientID
    );
    updatedProjects[projectIndex].patients = newPatients;
    updatedProjects[projectIndex].numberOfPatients=updatedProjects[projectIndex].numberOfPatients-0.5;
    return {
      projects: updatedProjects,
    };
  }
  if(action.type === "ADD_PATIENT_TO_PROJECT"){
    const projectIndex = state.projects.findIndex(
        (project) => project.id === action.projectID
      );
      let updatedProjects = state.projects;
      const newPatients = updatedProjects[projectIndex].patients.concat(action.patient);
      const findIndex = updatedProjects[projectIndex].patients.findIndex(patient => patient.id === action.patient.id )
      if(findIndex !== -1){
        return {
          projects: updatedProjects
        }
      }
      updatedProjects[projectIndex].patients = newPatients;
      updatedProjects[projectIndex].numberOfPatients++;
      return {
          projects:updatedProjects,
      };
  }
  if(action.type === "CHANGEPATIENT_CONSENT"){
    const projectIndex = state.projects.findIndex(
      (project) => project.id === action.projectID
    );
    let updatedProjects = state.projects;
    let updatedPatients = updatedProjects[projectIndex].patients;
    const patientIndex = updatedPatients.findIndex(patient => patient.id === action.patientID);
    updatedPatients[patientIndex].consent = action.consent;
    updatedProjects.patients = updatedPatients;
    return{
      projects: updatedProjects,
    }
  }

  return defaultProjectsState;
};
const ProjectProvider = (props) => {
  const [projectState, dispatchProjectAction] = useReducer(
    projectReducer,
    defaultProjectsState
  );
  const addProjectHandler = (project) => {
    dispatchProjectAction({ type: "ADD_PROJECT", project: project });
  };
  const removeProjectHandler = (id) => {
    dispatchProjectAction({ type: "REMOVE_PROJECT", id: id });
  };
  const editProjectHandler = (id, name, description) => {
    dispatchProjectAction({
      type: "EDIT_PROJECT",
      id: id,
      name: name,
      description: description,
    });
  };
  const removePatientFromProjectHandler = (patientID, projectID) => {
    dispatchProjectAction({
      type: "REMOVE_PATIENT_FROM PROJECT",
      patientID: patientID,
      projectID: projectID,
    });
  };
  const addPatientToProjectHandler = (projectID,patient)=>{
      dispatchProjectAction({
          type: "ADD_PATIENT_TO_PROJECT",
          patient: patient,
          projectID, projectID,
      })
  }
  const changePatientConsentHandler = (projectID,patientID,consent) =>{
    dispatchProjectAction({
      type: "CHANGEPATIENT_CONSENT",
      projectID:projectID,
      patientID:patientID,
      consent:consent,
    })
  }
  const projectContext = {
    projects: projectState.projects,
    addProject: addProjectHandler,
    removeProject: removeProjectHandler,
    editProject: editProjectHandler,
    removePatientFromProject: removePatientFromProjectHandler,
    addPatientToProject: addPatientToProjectHandler,
    changePatientConsent: changePatientConsentHandler,
  };
  return (
    <ProjectContext.Provider value={projectContext}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
