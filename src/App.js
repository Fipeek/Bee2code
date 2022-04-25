import { Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header";
import "./App.css";
import Patient from "./components/Patient";
import PatientProvider from "./store/PatientProvider";
import Patients from "./components/Patients";
import './components/reset.css';
import ProjectProvider from "./store/ProjectProvider";
import Projects from "./components/Projects";
function App() {
  return (
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
    </PatientProvider>
    </ProjectProvider>
  );
}

export default App;
