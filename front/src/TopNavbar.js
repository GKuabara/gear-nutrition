import './css/topNavbar.css';

const TopNavbar = () => {
    const logo = require('./media/imgs/logo.png');
    const searchBtn = require('./media/imgs/spyglass.png');
    const profileImg = require('./media/imgs/pirate.png');
    const cartImg = require('./media/imgs/shoppingBoat.png');

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
                <ul>
                    <li><a href="">Cadastro</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href=""><img src={profileImg} width="35px" /></a></li>
                    <li><a href=""><img src={cartImg} width="35px" /></a></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default TopNavbar;