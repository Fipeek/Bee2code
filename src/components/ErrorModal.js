import Backdrop from "./UI/Backdrop";
import styles from './ErrorModal.module.css';
const ErrorModal = (props) => {
    return ( <Backdrop>
        <div className={styles.error}>
        <header>

            <h2>Error</h2>
        </header>
        <p>{props.errorMessage}</p>
        <span onClick={props.onClick}>X</span>    
        </div> 
        </Backdrop>
        );
}
 
export default ErrorModal;