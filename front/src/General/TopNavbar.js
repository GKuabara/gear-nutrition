import { Link } from 'react-router-dom';
import TopNavLinks from './TopNavLinks';
import '../css/topNavbar.css';

const TopNavbar = ({isAdmin, isLogged}) => {
    const logo = require('../media/imgs/logo.png');

    return ( 
        <div className="navbar-top">
            <div></div>
            <div></div>
            <div className="logo">
                <Link to="/"><img alt="Site Logo" src={logo} id="logo" /></Link>
            </div>
            <nav>
                <TopNavLinks isAdmin={isAdmin} isLogged={isLogged} />
            </nav>
        </div>
    );
}
 
export default TopNavbar;