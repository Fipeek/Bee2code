import styles from './AddTestButton.module.css';
const AddTestButton = (props) => {
    return ( <button className={styles.addTest} onClick={props.onClick}>ADD</button>);
}
 
export default AddTestButton;