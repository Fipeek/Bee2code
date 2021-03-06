import react from "react";
import { useState } from "react";
import { useRef } from "react";
import PatientContext from "../store/patient-context";
import { useContext } from "react";
import styles from "./Form.module.css";
const AddPatientForm = (props) => {
  const formValidator = (name, lastName, city, street, number) => {
    if (
      name.trim().length === 0 ||
      lastName.trim().length === 0 ||
      city.trim().length === 0 ||
      street.trim().length === 0
    ) {
      return false;
    } else {
      return true;
    }
  };
  const patientCtx = useContext(PatientContext);
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const numberInputRef = useRef();
  const apartmentInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const isFormValid = formValidator(
      nameInputRef.current.value,
      lastNameInputRef.current.value,
      cityInputRef.current.value,
      streetInputRef.current.value,
      numberInputRef.current.value
    );
    if (isFormValid) {
      if (props.patientID !== undefined) {
        patientCtx.editPatient(
          props.patientID,
          nameInputRef.current.value,
          lastNameInputRef.current.value,
          cityInputRef.current.value,
          streetInputRef.current.value,
          numberInputRef.current.value,
          apartmentInputRef.current.value,
        );
      }
      else{
        const patient = {
          id: Math.random(),
          name: nameInputRef.current.value,
          lastName: lastNameInputRef.current.value,
          city: cityInputRef.current.value,
          street: streetInputRef.current.value,
          number: numberInputRef.current.value,
          apartment: apartmentInputRef.current.value,
        };
        patientCtx.addPatient(patient);
      }
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label>Name</label>
      <input ref={nameInputRef} defaultValue={props.name}></input>
      <label>Last Name</label>
      <input ref={lastNameInputRef} defaultValue={props.lastName}></input>
      <label>City</label>
      <input ref={cityInputRef} defaultValue={props.city}></input>
      <label>Street</label>
      <input ref={streetInputRef} defaultValue={props.street}></input>
      <label>Number</label>
      <input ref={numberInputRef} defaultValue={props.number}></input>
      <label>Apartment (Optional)</label>
      <input ref={apartmentInputRef} defaultValue={props.apartment}></input>
      <button type="submit">Add</button>
      <span onClick={props.onClick}>X</span>
    </form>
  );
};

export default AddPatientForm;
