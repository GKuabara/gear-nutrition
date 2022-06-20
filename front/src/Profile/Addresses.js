import { useState } from "react";
import { Link } from 'react-router-dom';
import AddrCard from "./AddrCard";
import '../css/addresses.css';

const Addresses = () => {
    const [addrs, setAddrs] = useState([
        {key: "Principal", addr: "Rua ABCDEGH", cep: "00000-000", num: 1337, district: "Centro", city: "São Carlos", state: "SP"}
    ]);

    return (  
        <div className="info-container" id="addresses">
            {
            addrs.map((addr) => {
                return (
                    <div key={addr.key} className="b-shadow profile-card">
                        <AddrCard addr={addr}/>
                    </div>    
                );
            })
            }
            <Link to="/profile/newAddress">Editar</Link>
        </div>
    );
}
 
export default Addresses;