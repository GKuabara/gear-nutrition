import BottomNavLinks from './BottomNavLinks';
import './css/bottomNavbar.css';

const BottomNav = () => {
    return ( 
        <div className="navbar-bottom">
            <nav>
                <BottomNavLinks />
            </nav>
        </div>
    );
}
 
export default BottomNav;