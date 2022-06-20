import BottomNavLinks from './BottomNavLinks';
import '../css/bottomNavbar.css';

const BottomNav = ({isLogged}) => {
    return ( 
        <div className="navbar-bottom">
            <nav>
                <BottomNavLinks isLogged={isLogged} />
            </nav>
        </div>
    );
}
 
export default BottomNav;