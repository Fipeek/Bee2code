import PatientContext from "./patient-context";
import { useReducer } from "react";
const DUMMY_PATIENTS = [
    {
      id:Math.random,
      name: "name",
      lastName: "lastName",
      city: "miasto",
      street: "ulica",
      number: "numer",
      apartment: "apartament",
    },
    {
      id:Math.random,
      name: "name2",
      lastName: "lastName",
      city: "miasto",
      street: "ulica",
      number: "numer",
      apartment: "apartament",
    },
    {
      id:Math.random,
      name: "name5",
      lastName: "lastName",
      city: "miasto",
      street: "ulica",
      number: "numer",
      apartment: "apartament",
    },
  ];
  const defaultPatientState = {
      patients: DUMMY_PATIENTS
  }
  const patientReducer = (state,action) =>{
      if(action.type=== 'ADD_PATIENT'){
          const updatedPatients = state.patients.concat(action.patient);
        return{
            patients: updatedPatients,
        }
      }
      if(action.type === "REMOVE_PATIENT"){
       
          let updatedPatients = state.patients.filter(patient=> patient.id !== action.id);
          return{
            patients: updatedPatients,
        }
      }
      return defaultPatientState;
  };
const PatientProvider = (props) => {
    const [patientState, dispatchPatientAction] =  useReducer(patientReducer, defaultPatientState);

   const addPatientHandler = patient =>{
       dispatchPatientAction({type: "ADD_PATIENT", patient: patient})
   };

   const removePatientHandler = id =>{
     dispatchPatientAction({type: "REMOVE_PATIENT", id: id})
   };

   const editPatientHandler = patient =>{};

    const patientContext = {
        patients: patientState.patients,
        addPatient: addPatientHandler,
        removePatient: removePatientHandler,
        editPatient:  editPatientHandler
    };

    return <PatientContext.Provider value={patientContext}>
        {props.children}
    </PatientContext.Provider>
};
 
export default PatientProvider;