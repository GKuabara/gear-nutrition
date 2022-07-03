import axios from 'axios'
import './css/profile.css';
import './css/App.css';
import { Route, BrowserRouter as Router, Routes, useSearchParams } from "react-router-dom";
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
import { useEffect } from 'react';

function App() {
	let [user, setUser] = useState(false); 
	let [products, setProducts] = useState([])
    
    useEffect(() => {
        getProds()
    }, [])
	
    function getProds() {
        axios.create({ baseURL: "http://localhost:5000/product", headers: {"Content-Type": "application-json"} })
        .get()
        .then(resp => {
            setProducts(resp.data)
        })
        .catch(e => {
            console.error(e)
        })
    }

	return (
		<div className="App">
			<Router>
				<NavBar user={user} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Homepage data={products}/>} />
						<Route path="/tmb" element={<TMB />} />
						
						<Route path="/profile">
							<Route path="/profile/changePwd" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUser} />
									<ChangePwd />
								</div>
							)} />

							<Route path="/profile/orders" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUser} />
									<Orders />
								</div>
							)} />

							<Route path="/profile/data" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUser} />
									<ProfileData />
								</div>
							)} />

							<Route path="/profile/addresses" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUser} />
									<Addresses />
								</div>
							)} />

							<Route path="/profile/newAddress" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUser} />
									<NewAddress />
								</div>
							)} />
						</Route>
						
						<Route path="/login" element={<Login setUser={setUser} />} />
						<Route path="/signup" element={<SignUp />} />
						
						<Route path="/product" element={<Product data={products}/>} />
						<Route path="/cart" element={<Cart data={products}/>} />
						<Route path="/payment" element={<Payment data={products} />} />
						<Route path="/ordered" element={<Ordered />} />

						<Route path="/admin">
							<Route path="" element={(
								<AdminLogin user={user}/>
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
