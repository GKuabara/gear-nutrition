import { Link } from 'react-router-dom';
import '../css/addrCard.css';
import '../css/addresses.css';
import AddrCard from './AddrCard';

const Addresses = ({user}) => {
    return (  
        <div className="info-container" id="addresses">
            <div className="b-shadow profile-card">
                <AddrCard uInfo={user}/>
            </div>  
            <Link to="/profile/newAddress">Editar</Link>
        </div>
    );
}
 
export default Addresses;