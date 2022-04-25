import React from "react";
const ProjectContext = React.createContext({
   projects: [],
   addProject: (project) =>{},
})
export default ProjectContext;