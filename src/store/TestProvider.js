import { useReducer } from "react";
import TestContext from "./test-contex";
const DUMMY_PATIENT = {
  id: 1,
  name: "name",
  lastName: "A",
  city: "miasto",
  street: "Pułaskiego",
  number: "45",
  apartment: "apartament",
  consent: true,
};
const DUMMY_PROJECT = {
  id: 3,
  name: "test3",
  description: "projektu",
  numberOfPatients: 0,
  patients: [{ DUMMY_PATIENT }],
};
const DUMMY_PROJECT2 = {
  id: 2,
  name: "test2",
  description: "projektu",
  numberOfPatients: 0,
  patients: [{ DUMMY_PATIENT }],
};
const DUMMY_TESTS = [
  {
    id: 1,
    name: "test",
    patient: DUMMY_PATIENT,
    project: DUMMY_PROJECT,
    description: "xd",
    result: "rez",
    done: false,
  },
  {
    id: 2,
    name: "test",
    patient: DUMMY_PATIENT,
    project: DUMMY_PROJECT2,
    description: "xd",
    result: "rez",
    done: false,
  },
  {
    id: 3,
    name: "test",
    patient: DUMMY_PATIENT,
    project: DUMMY_PROJECT,
    description: "xd",
    result: "rez",
    done: false,
  },
];

const defaultTestsState = {
  tests: DUMMY_TESTS,
};
const testReducer = (state, action) => {
  if (action.type === "ADD_TEST") {
    const updatedTests = state.tests.concat(action.test);
    return {
      tests: updatedTests,
    };
  }
  if (action.type === "REMOVE_TEST") {
    const updatedTests = state.tests.filter((test) => test.id !== action.id);
    return {
      tests: updatedTests,
    };
  }
  if (action.type === "EDIT_TEST") {
    const index = state.tests.findIndex((test) => test.id === action.id);
    let updatedTests = state.tests;
    updatedTests[index].name = action.test.name;
    updatedTests[index].patient = action.patient;
    updatedTests[index].project = action.project;
    updatedTests[index].description = action.test.description;
    updatedTests[index].result = action.test.result;
    updatedTests[index].done = action.test.done;
    return {
        tests:updatedTests
    }
  }
  return defaultTestsState;
};
const TestProvider = (props) => {
  const [testState, dispatchTestAction] = useReducer(
    testReducer,
    defaultTestsState
  );
  const addTestHandler = (test) => {
    dispatchTestAction({ type: "ADD_TEST", test: test });
  };
  const removeTestHandler = (id) => {
    dispatchTestAction({ type: "REMOVE_TEST", id: id });
  };
  const editTestHandler = (id, test, project, patient) => {
    dispatchTestAction({
      type: "EDIT_TEST",
      id: id,
      test: test,
      project: project,
      patient: patient,
    });
  };
  const testContext = {
    tests: testState.tests,
    addTest: addTestHandler,
    removeTest: removeTestHandler,
    editTest: editTestHandler,
  };
  return (
    <TestContext.Provider value={testContext}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
