import './css/App.css';
import Footer from './Footer';
import Product from './Product';
import Payment from './Payment/Payment';
import Homepage from './Home';
import NewAddress from './NewAddress';
import Login from './LoginPage'
import SignUp from './SignUp'
import TMB from './Tmb';
import ChangePwd from './ChangePwd';
import Orders from './Orders';
import Stock from './Stock';
import NavBar from './Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfileNav from './ProfileNav';
import ProfileData from './ProfileData';
import Addresses from './Addresses';
import './css/profile.css';
import { useState } from 'react';
import Cart from './Cart';
import Ordered from './Ordered';
import AdminNav from './AdminNav';
import AdminLogin from './AdminLogin';
import EditStock from './EditStock';
import AddProduct from './AddProduct';
import RemoveProduct from './RemoveProduct';
import ManageAdmins from './ManageAdmins';
import AddAdmin from './AddAdmin';

function App() {
	let [isLogged, setIsLogged] = useState(true); 
	let [isAdmin, setIsAdmin] = useState(false); 

	return (
		<div className="App">
			<Router>
				<NavBar isAdmin={isAdmin} isLogged={isLogged} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/tmb" element={<TMB />} />
						
						<Route path="/profile">
							<Route path="/profile/changePwd" element={(
								<div id='profile-container'>
									<ProfileNav setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} />
									<ChangePwd />
								</div>
							)} />

							<Route path="/profile/orders" element={(
								<div id='profile-container'>
									<ProfileNav setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} />
									<Orders />
								</div>
							)} />

							<Route path="/profile/data" element={(
								<div id='profile-container'>
									<ProfileNav setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} />
									<ProfileData />
								</div>
							)} />

							<Route path="/profile/addresses" element={(
								<div id='profile-container'>
									<ProfileNav setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} />
									<Addresses />
								</div>
							)} />

							<Route path="/profile/newAddress" element={(
								<div id='profile-container'>
									<ProfileNav setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} />
									<NewAddress />
								</div>
							)} />
						</Route>
						
						<Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
						<Route path="/signup" element={<SignUp />} />
						
						<Route path="/product" element={<Product />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/payment" element={<Payment />} />
						<Route path="/ordered" element={<Ordered />} />

						<Route path="/admin">
							<Route path="" element={(
								<AdminLogin setIsLogged={setIsLogged} setIsAdmin={setIsAdmin}/>
							)} />

							<Route path="stock" element={(
								<div id='admin-container'>
									<AdminNav />
									<Stock />
								</div>
							)} />

							<Route path="stockEdit" element={(
								<div id='admin-container'>
									<AdminNav />
									<EditStock />
								</div>
							)} />
							
							<Route path="addProduct" element={(
								<div id='admin-container'>
									<AdminNav />
									<AddProduct />
								</div>
							)} />
							
							<Route path="removeProduct" element={(
								<div id='admin-container'>
									<AdminNav />
									<RemoveProduct />
								</div>
							)} />
							
							<Route path="manageAdmins" element={(
								<div id='admin-container'>
									<AdminNav />
									<ManageAdmins />
								</div>
							)} />
							
							<Route path="addAdmin" element={(
								<div id='admin-container'>
									<AdminNav />
									<AddAdmin />
								</div>
							)} />

							<Route path="editStock/:id" element={(
								<div id='admin-container'>
									<AdminNav />
									<EditStock />
								</div>
							)} />
						</Route>
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
