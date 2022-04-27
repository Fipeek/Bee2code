import React from "react";
const TestContext = React.createContext({
   tests: [],
   addTest: (test)=>{},
   removeTest: (id)=>{},
   editTest: (id)=>{},
})
export default TestContext;