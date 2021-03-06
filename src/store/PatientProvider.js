import PatientContext from "./patient-context";
import { useReducer } from "react";
const DUMMY_PATIENTS = [
  {
    id: 1,
    name: "Filip",
    lastName: "Nowak",
    city: "Bialystok",
    street: "Pułaskiego",
    number: "45",
    apartment: "15",
    consent: true,
  },
  {
    id: 2,
    name: "Adam",
    lastName: "Nowacki",
    city: "Wrocław",
    street: "Transprotowa",
    number: "32",
    apartment: "23",
    consent: true,
  },
  {
    id: 3,
    name: "Piotr",
    lastName: "Kowalski",
    city: "Warszawa",
    street: "szybka",
    number: "31",
    apartment: "12",
    consent: true,
  },
];
const defaultPatientState = {
  patients: DUMMY_PATIENTS,
};
const patientReducer = (state, action) => {
  if (action.type === "ADD_PATIENT") {
    const updatedPatients = state.patients.concat(action.patient);
    return {
      patients: updatedPatients,
    };
  }
  if (action.type === "REMOVE_PATIENT") {
    const updatedPatients = state.patients.filter(
      (patient) => patient.id !== action.id
    );
    return {
      patients: updatedPatients,
    };
  }
  if (action.type === "EDIT_PATIENT") {
    let updatedPatients = state.patients;
    const patientIndex = state.patients.findIndex(
      (patient) => patient.id === action.id
    );
    updatedPatients[patientIndex].name = action.name;
    updatedPatients[patientIndex].lastName = action.lastName;
    updatedPatients[patientIndex].city = action.city;
    updatedPatients[patientIndex].street = action.street;
    updatedPatients[patientIndex].number = action.number;
    updatedPatients[patientIndex].apartment = action.apartment;
    return {
      patients: updatedPatients,
    };
  }
  if (action.type === "CHANGE_CONSENT") {
    let updatedPatients = state.patients;
    const patientIndex = state.patients.findIndex(
      (patient) => patient.id === action.id
      );
     
    updatedPatients[patientIndex].consent =
      action.consent;
    return {
      patients: updatedPatients,
    };
  }
  return defaultPatientState;
};
const PatientProvider = (props) => {
  const [patientState, dispatchPatientAction] = useReducer(
    patientReducer,
    defaultPatientState
  );

  const addPatientHandler = (patient) => {
    dispatchPatientAction({ type: "ADD_PATIENT", patient: patient });
  };

  const removePatientHandler = (id) => {
    dispatchPatientAction({ type: "REMOVE_PATIENT", id: id });
  };

  const editPatientHandler = (
    id,
    name,
    lastName,
    city,
    street,
    number,
    apartment
  ) => {
    dispatchPatientAction({
      type: "EDIT_PATIENT",
      id: id,
      name: name,
      lastName: lastName,
      city: city,
      street: street,
      number: number,
      apartment: apartment,
    });
  };
  const changeConsentHandler = (id, consent) => {
    dispatchPatientAction({ type: "CHANGE_CONSENT", id: id , consent: consent});
  };

  const patientContext = {
    patients: patientState.patients,
    addPatient: addPatientHandler,
    removePatient: removePatientHandler,
    editPatient: editPatientHandler,
    changeConsent: changeConsentHandler,
  };

  return (
    <PatientContext.Provider value={patientContext}>
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;
