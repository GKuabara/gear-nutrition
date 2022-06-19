import './css/topNavbar.css';
import TopNavLinks from './TopNavLinks';

const TopNavbar = () => {
    const logo = require('./media/imgs/logo.png');
    const searchBtn = require('./media/imgs/spyglass.png');

    return ( 
        <div className="navbar-top">
            <div className="logo">
                <a href="home.html"><img src={logo} id="logo" /></a>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Procurar por um produto" />
                <img src={searchBtn} /> 
            </div>
            <nav>
                <TopNavLinks />
            </nav>
        </div>
    );
}
 
export default TopNavbar;