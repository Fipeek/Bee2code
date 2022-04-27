import styles from "./Patient.module.css";
import PatientContext from "../store/patient-context";
import { useContext, useState } from "react";
import TestContext from "../store/test-contex";
import TestForm from "./TestForm";
import Backdrop from "./UI/Backdrop";
import { Fragment } from "react";
const Test = (props) => {
  const projectCtx = useContext(TestContext);
  const removeTestHandler = () => {
    projectCtx.removeTest(props.id);
  };
  const [isEditing, setIsEditing] = useState(false);
  const setIsEditingHandler = (event) => {
    setIsEditing(!isEditing);
  };
  const project = props.project;
  const patient = props.patient;
  const test = {
    id: props.id,
    name: props.name,
    description: props.description,
    patient: patient,
    project: project,
    result: props.result,
    done: props.done,
  };
  return (
    <Fragment>
     {isEditing && <Backdrop>
        <TestForm onClick ={setIsEditingHandler}
            id={test.id}
          name={test.name}
          description={test.description}
          result={test.result}
          testState={test.done}
          patient={patient}
          project={project}
        ></TestForm>
      </Backdrop>
}
      <tr className={styles.patient}>
        <td> {patient.name}</td>
        <td> {patient.lastName}</td>
        <td> {project.name}</td>
        <td> {test.name}</td>
        <td> {test.description}</td>
        <td> {test.result}</td>
        <td>
          <button onClick={setIsEditingHandler}>EDIT</button>
          <button onClick={removeTestHandler}>DELETE</button>
        </td>
      </tr>
    </Fragment>
  );
};

export default Test;
