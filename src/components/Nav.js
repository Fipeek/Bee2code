import react from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
const Nav = () => {
    return ( <nav className={styles.navbar}>
        <ul>
            <li><Link to='/Pacjenci'>Pacjenci</Link></li>
            <li><Link to="/Projekty">Projekty</Link></li>
            <li><Link to="/zarzadzanieProjektami">zarzadzanieProjektami</Link></li>
            <li><Link to='./testy'>testy </Link></li>
            <li><Link to='./summary'>Podsumowanie </Link></li>
        </ul>
    </nav> );
}
 
export default Nav;