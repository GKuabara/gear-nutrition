import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GiPirateCaptain } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import TopNavBar from './TopNavbar';
import BottomNavBar from './BottomNavbar';
import TopNavLinks from './TopNavLinks';
import BottomNavLinks from './BottomNavLinks';
import './css/navbar.css';

const NavBar = () => {
    const logo = require('./media/imgs/logo.png');
    let [showProdHam, setShowProdHam] = useState(false);
    let [showProfHam, setShowProfHam] = useState(false);

    const openIcon = <AiOutlineMenu onClick={() => {openProdMenu()}} className='hamburger' color='white' size="30px"/>;
    const closeIcon =  <MdClose onClick={() => {openProdMenu()}} className='hamburger' color='white' size="30px"/>;

    const openPIcon = <GiPirateCaptain onClick={() => {openMenu()}} className='hamburger' color='white' size="30px" />
    const closePIcon = <MdClose onClick={() => {openMenu()}} className='hamburger' color='white' size="30px" />

    function openProdMenu() {
        if (showProfHam)
            setShowProfHam(false);
        setShowProdHam(!showProdHam);
    }

    function openMenu() {
        if (showProdHam)
            setShowProdHam(false);
        setShowProfHam(!showProfHam);
    }

    return (
        <div style={{alignItems:"center"}}>
            <div className='hamburger-container'>
                <div className='hamburger-menu'>
                    {showProdHam ? closeIcon : openIcon}
                </div>
                <div className="mobile-logo">
                    <a href="home.html"><img src={logo} id="logo" /></a>
                </div>
                <div className="profile-links">
                    {showProfHam ? closePIcon : openPIcon}
                </div>
            </div>
            <div className='menu-links'>
                {showProdHam && <BottomNavLinks closeMenu={openProdMenu} />}
            </div>
            <div className='menu-links'>
                {showProfHam && <TopNavLinks closeMenu={openMenu} />}
            </div>
            <div className='responsive-menu'>
                <TopNavBar />
                <BottomNavBar />
            </div>
        </div>
    );
}
 
export default NavBar;