import './css/profile.css';
import './css/App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from 'react';
import Footer from './General/Footer';
import Product from './Product/Product';
import Payment from './Payment/Payment';
import Homepage from './Home';
import NewAddress from './Profile/NewAddress';
import Login from './General/LoginPage'
import SignUp from './General/SignUp'
import TMB from './General/Tmb';
import ChangePwd from './Profile/ChangePwd';
import Orders from './Profile/Orders';
import Stock from './Admin/Stock';
import NavBar from './General/Navbar';
import ProfileNav from './Profile/ProfileNav';
import ProfileData from './Profile/ProfileData';
import Addresses from './Profile/Addresses';
import Cart from './Cart/Cart';
import Ordered from './Payment/Ordered';
import AdminNav from './Admin/AdminNav';
import AdminLogin from './Admin/AdminLogin';
import EditStock from './Admin/EditStock';
import AddProduct from './Admin/AddProduct';
import RemoveProduct from './Admin/RemoveProduct';
import ManageAdmins from './Admin/ManageAdmins';
import AddAdmin from './Admin/AddAdmin';
import database from './data.json';

function App() {
	let [isLogged, setIsLogged] = useState(true); 
	let [isAdmin, setIsAdmin] = useState(false);
	const [data, setData] = useState(database);

	return (
		<div className="App">
			<Router>
				<NavBar isAdmin={isAdmin} isLogged={isLogged} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Homepage data={data} setData={setData}/>} />
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
						
						<Route path="/product" element={<Product data={data} setData={setData}/>} />
						<Route path="/cart" element={<Cart data={data} setData={setData}/>} />
						<Route path="/payment" element={<Payment data={data} setData={setData} />} />
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
