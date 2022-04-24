import ProjectContext from "./project-context";
const ProjectProvider = (props) => {
    return ( <ProjectContext.Provider>
        {props.children}
    </ProjectContext.Provider> );
}
 
export default ProjectProvider;