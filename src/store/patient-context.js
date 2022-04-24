import React from "react";

const PatientContext =  React.createContext({
    patients:[],
    addPatient: (patient) =>{},
    removePatient:(id)=>{},
    editPatient: (id,name,city,street,number,apartment)=>{},
})
export default PatientContext;