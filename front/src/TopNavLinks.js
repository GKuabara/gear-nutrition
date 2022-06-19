const TopNavLinks = ({closeMenu}) => {
    const profileImg = require('./media/imgs/pirate.png');
    const cartImg = require('./media/imgs/shoppingBoat.png');
    
    return (  
        <ul>
            <li><a onClick={() => closeMenu()} href="">Cadastro</a></li>
            <li><a onClick={() => closeMenu()} href="">Login</a></li>
            <li><a onClick={() => closeMenu()} href="">Conta</a></li>
            <li><a onClick={() => closeMenu()} href="">Carrinho</a></li>
        </ul>
    );
}
 
export default TopNavLinks;