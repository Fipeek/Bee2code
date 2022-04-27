import react from "react";
import Patient from "./Patient";
import { useContext } from "react";
import PatientContext from "../store/patient-context";
import styles from './Patients.module.css';
import { Fragment } from "react";
import { useState } from "react";
import AddPatientForm from "./AddPatientForm";
import Backdrop from "./UI/Backdrop";

const Patients = () => {
  const [isAdding,setIsAdding] = useState(false);
  const [sortType,setSortType] = useState("ascending");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("name");
  const setIsAddingHandler = () =>{ 
    setIsAdding(!isAdding);
  }
  
  const patientCtx = useContext(PatientContext);
  const filterChangeHandler = event =>{
    setSortType(event.target.value);
    
  }
  const searchFieldChangeHandler = event =>{
    setSearchField(event.target.value);
  }
  patientCtx.patients.sort(function(a,b){
    if(sortType==='ascending'){

    
    if(a.lastName.toLowerCase()< b.lastName.toLowerCase()){
      return -1;
    }
    if(a.lastName.toLowerCase()> b.lastName.toLowerCase()){
      return 1;
    }
  }
  if(sortType==="descending"){
    if(a.lastName.toLowerCase()< b.lastName.toLowerCase()){
      return 1;
    }
    if(a.lastName.toLowerCase()> b.lastName.toLowerCase()){
      return -1;
    }
  }
    return 0;
  });
  const patients = patientCtx.patients.filter((patient) => {
    
    if(searchField === "name"){
    if(searchTerm== ""){
       return patient;
     }
     else if(patient.name.toLowerCase().includes(searchTerm.toLowerCase())){
       return patient;
     }
    }
    if(searchField === "lastName"){
      if(searchTerm== ""){
        return patient;
      }
      else if(patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())){
        return patient;
      }
    }
    if(searchField === "city"){
      if(searchTerm== ""){
        return patient;
      }
      else if(patient.city.toLowerCase().includes(searchTerm.toLowerCase())){
        return patient;
      }
    }
    if(searchField==="street"){
      if(searchTerm== ""){
        return patient;
      }
      else if(patient.street.toLowerCase().includes(searchTerm.toLowerCase())){
        return patient;
      }
    }
    if(searchField==="number"){
      if(searchTerm== ""){
        return patient;
      }
      else if(patient.number.toLowerCase().includes(searchTerm.toLowerCase())){
        return patient;
      }
    }
    if(searchField==="apartment"){
      if(searchTerm== ""){
        return patient;
      }
      else if(patient.apartment.toLowerCase().includes(searchTerm.toLowerCase())){
        return patient;
      }
    }
  }).map((patient) => (
    <Patient
      id={patient.id}
      name={patient.name}
      lastName={patient.lastName}
      city={patient.city}
      street={patient.street}
      number={patient.number}
      apartment={patient.apartment}
    ></Patient>
  ));


  return(
    <div>
    { isAdding && <Backdrop>
      <AddPatientForm onClick={setIsAddingHandler}></AddPatientForm>
      </Backdrop>}
      <select onChange={filterChangeHandler}>
        <option value="ascending">ascending</option>
        <option value="descending">descending</option>
      </select>
      <select onChange={searchFieldChangeHandler}>
        <option value="name">name</option>
        <option value="lastName">LastName</option>
        <option value="city">City</option>
        <option value="street">Street</option>
        <option value="number">Number</option>
        <option value="apartment">Apartment</option>
      </select>

      <input onChange={ (event) =>{
        setSearchTerm(event.target.value);
      }}></input>
  <table className={styles.patients}>
    <tr>
      <th>Imie</th>
      <th>Nazwisko</th>
      <th>Miasto</th>
      <th>Street</th>
      <th>Number</th>
      <th>Aparatment</th>
      <th>Action</th>
    </tr>{patients}
    <tr><button onClick={setIsAddingHandler} className={styles.addPatient}>ADD</button></tr>
    </table>
    
  
  </div>
    ) 
   
};

export default Patients;
