import { Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header";
import "./App.css";
import Patient from "./components/Patient";
import PatientProvider from "./store/PatientProvider";
import Patients from "./components/Patients";
import "./components/reset.css";
import ProjectProvider from "./store/ProjectProvider";
import Projects from "./components/Projects";
import ManageProjects from "./components/Pages/ManageProjects";
import TestsPage from "./components/Pages/TestsPage";
import TestProvider from "./store/TestProvider";
import Summary from "./components/Pages/Summary";
import ErrorModal from "./components/ErrorModal";
import ManagePatients from "./components/Pages/managePatients";
import { Redirect } from "react-router-dom";
function App() {
  return (
    <TestProvider>

    <ProjectProvider>
      <PatientProvider>
        <Header />
        <Route path='/'>
          <Redirect to="./Pacjenci"></Redirect>
        </Route>
        <Route path="/Pacjenci">

          <ManagePatients></ManagePatients>
        </Route>
        <Route path="/Projekty">
          <Projects></Projects>
        </Route>
        <Route path="/zarzadzanieProjektami">
          <ManageProjects></ManageProjects>
        </Route>
        <Route path="/testy">
          <TestsPage></TestsPage>
        </Route>
        <Route path='/summary'>
      <Summary></Summary>
        </Route>
      </PatientProvider>
    </ProjectProvider>
    </TestProvider>
  );
}

export default App;
