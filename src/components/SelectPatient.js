const SelectPatient = (props) => {
    return ( <option value={props.id}>
        {props.name + " " + props.lastName}
    </option> );
}
 
export default SelectPatient;