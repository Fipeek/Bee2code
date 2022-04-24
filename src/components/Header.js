import Nav from "./Nav";
import styles from './Header.module.css';
const Header = () => {
    return ( <header className={styles.header}>
        <h1>Bee2Code</h1>
        <Nav></Nav>
    </header> );
}
 
export default Header;