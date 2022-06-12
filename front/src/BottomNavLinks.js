const BottomNavLinks = ({closeMenu}) => {
    return (  
        <ul>
            <li><a onClick={() => closeMenu()} href="#g20">Gear Second</a></li>
            <li><a onClick={() => closeMenu()} href="#g30">Gear Third</a></li>
            <li><a onClick={() => closeMenu()} href="#g40">Gear Fourth</a></li>
            <li><a onClick={() => closeMenu()} href="">Calcular TMB</a></li>
        </ul>
    );
}
 
export default BottomNavLinks;