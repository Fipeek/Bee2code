import react from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
const Nav = () => {
    return ( <nav className={styles.navbar}>
        <ul>
            <li><Link to='/Pacjenci'>Pacjenci</Link></li>
            <li><Link to="/Projekty">Projekty</Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
        </ul>
    </nav> );
}
 
export default Nav;