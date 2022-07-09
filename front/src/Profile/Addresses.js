import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AddrCard from './AddrCard';
import '../css/addrCard.css';
import '../css/addresses.css';
import User from '../services/user';

const Addresses = ({user, setUser}) => {
    useEffect(() => {
        if (user === null) User.fetchUser(setUser)
    })

    return (  
        user && <div className="info-container" id="addresses">
            <div className="b-shadow profile-card">
                <AddrCard uInfo={user}/>
            </div>  
            <Link to="/profile/newAddress">Editar</Link>
        </div>
    );
}
 
export default Addresses;