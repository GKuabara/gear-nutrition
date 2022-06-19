import './css/App.css';
import Footer from './Footer';
import Profile from './Profile';
import Homepage from './Home';
import NewAddress from './NewAddress';
import Login from './LoginPage'
import SignUp from './SignUp'
import TMB from './Tmb';
import ChangePwd from './ChangePwd';
import Orders from './Orders';
import Stock from './Stock';
import Admin from './Admin';
import NavBar from './Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ChangePwd from './ChangePwd';
import ProfileNav from './ProfileNav';
// import Orders from './Orders';
import ProfileData from './ProfileData';
import Addresses from './Addresses';
// import NewAddress from './NewAddress';
import './css/profile.css';
import { useState } from 'react';

function App() {
	let [isLogged, setIsLogged] = useState(true); 

	return (
		<div className="App">
			<Router>
				<NavBar isLogged={isLogged} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/tmb" element={<TMB />} />
						
						<Route path="/profile">
							<Route path="/profile/changePwd" element={(
								<div id='profile-container'>
									<ProfileNav setIsLogged={setIsLogged} />
									<ChangePwd />
								</div>
							)} />

							<Route path="/profile/orders" element={(
								<div id='profile-container'>
									<ProfileNav setIsLogged={setIsLogged} />
									<Orders />
								</div>
							)} />

							<Route path="/profile/data" element={(
								<div id='profile-container'>
									<ProfileNav setIsLogged={setIsLogged} />
									<ProfileData />
								</div>
							)} />

							<Route path="/profile/addresses" element={(
								<div id='profile-container'>
									<ProfileNav setIsLogged={setIsLogged} />
									<Addresses />
								</div>
							)} />

							<Route path="/profile/newAddress" element={(
								<div id='profile-container'>
									<ProfileNav setIsLogged={setIsLogged} />
									<NewAddress />
								</div>
							)} />

							<Route path="/profile/newAddress" element={(
								<div id='profile-container'>
									<ProfileNav setIsLogged={setIsLogged} />
									<NewAddress />
								</div>
							)} />
						</Route>
						
						<Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
						<Route path="/signup" element={<SignUp />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
