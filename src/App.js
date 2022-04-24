import { Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header";
import "./App.css";
import Patient from "./components/Patient";
import PatientProvider from "./store/PatientProvider";
import Patients from "./components/Patients";
import './components/reset.css';
function App() {
  return (
    <PatientProvider>
      <Header />
      <Route path="/Pacjenci">
       <Patients></Patients>
      </Route>
      <Route path="/Projekty">
        <div>Projekty</div>
      </Route>
    </PatientProvider>
  );
}

export default App;
