
import ProjectContext from "../store/project-context";
const SelectProject = (props) => {
       return ( 
           <option value={props.name}>
    {props.name}
    </option> );
           
}
 
export default SelectProject;