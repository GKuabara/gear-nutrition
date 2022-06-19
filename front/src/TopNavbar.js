import { Link } from 'react-router-dom';
import './css/topNavbar.css';
import TopNavLinks from './TopNavLinks';

const TopNavbar = ({isLogged}) => {
    const logo = require('./media/imgs/logo.png');
    const searchBtn = require('./media/imgs/spyglass.png');

    return ( 
        <div className="navbar-top">
            <div className="logo">
                <Link to="/"><img src={logo} id="logo" /></Link>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Procurar por um produto" />
                <img src={searchBtn} /> 
            </div>
            <nav>
                <TopNavLinks isLogged={isLogged} />
            </nav>
        </div>
    );
}
 
export default TopNavbar;