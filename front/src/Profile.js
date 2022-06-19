import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChangePwd from './ChangePwd';
import ProfileNav from './ProfileNav';
import Orders from './Orders';
import ProfileData from './ProfileData';
import Addresses from './Addresses';
import NewAddress from './NewAddress';
import './css/profile.css';

const Profile = () => {
    return ( 
        <div id="profile-container">
            <Router>
                <ProfileNav />
                <Routes>
                    <Route path="/profile/changePwd" element={<ChangePwd />} />
                    <Route path="/profile/orders" element={<Orders />} />
                    <Route path="/profile/data" element={<ProfileData />} />
                    <Route path="/profile/addresses" element={<Addresses />} />
                    <Route path="/profile/newAddress" element={<NewAddress />} />
                </Routes>
            </Router>
        </div>
     );
}
 
export default Profile;