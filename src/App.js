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
function App() {
  return (
    <TestProvider>

    <ProjectProvider>
      <PatientProvider>
        <Header />
        <Route path="/Pacjenci">
          <Patients></Patients>
        </Route>
        <Route path="/Projekty">
          <div>Projekty</div>
          <Projects></Projects>
        </Route>
        <Route path="/zarzadzanieProjektami">
          <ManageProjects></ManageProjects>
        </Route>
        <Route path="/testy">
          <TestsPage></TestsPage>
        </Route>
      </PatientProvider>
    </ProjectProvider>
    </TestProvider>
  );
}

export default App;
