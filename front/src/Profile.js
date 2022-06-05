import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChangePwd from './ChangePwd';
import ProfileNav from './ProfileNav';
import './css/profile.css';
import Orders from './Orders';
import ProfileData from './ProfileData';
import Addresses from './Addresses';
import NewAddress from './NewAddress';

const Profile = () => {
    return ( 
        <div id="profile-container">
            <Router>
                <ProfileNav/>
                <Routes>
                    <Route path="/changePwd" element={<ChangePwd />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/profile" element={<ProfileData />} />
                    <Route path="/addresses" element={<Addresses />} />
                    <Route path="/newAddress" element={<NewAddress />} />
                </Routes>
            </Router>
        </div>
     );
}
 
export default Profile;