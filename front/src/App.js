import './css/profile.css';
import './css/App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
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
import EditStock from './Admin/EditStock';
import AddProduct from './Admin/AddProduct';
import RemoveProduct from './Admin/RemoveProduct';
import ManageAdmins from './Admin/ManageAdmins';
import Prod from './services/product';
import User from './services/user';
import Order from './services/orders';

function App() {
	let [user, setUser] = useState(localStorage.getItem('token') || false); 
	let [products, setProducts] = useState([])
	let [orders, setOrders] = useState([])
	let [userInfo, setUserInfo] = useState(null)
    
    useEffect(() => {
        Prod.fetchProducts(setProducts)
		Order.fetchOrders(setOrders)
    }, [user])

	useEffect(() => {
		if (userInfo === null && localStorage.getItem('id') !== null) 
			User.fetchUser(setUserInfo)
	}, [userInfo])

	return (
		<div className="App">
			<Router>
				<NavBar user={userInfo} />
				<div className="content">
					<Routes>
						<Route path="/" element={<Homepage data={products}/>} />
						<Route path="/tmb" element={<TMB />} />
						
						<Route path="/profile">
							<Route path="/profile/changePwd" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUserInfo} />
									<ChangePwd setUser={setUserInfo} userInfo={userInfo} user={user} />
								</div>
							)} />

							<Route path="/profile/orders" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUserInfo} />
									<Orders orders={orders} user={user} />
								</div>
							)} />

							<Route path="/profile/data" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUserInfo} />
									<ProfileData setUser={setUserInfo} user={userInfo} />
								</div>
							)} />

							<Route path="/profile/addresses" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUserInfo} />
									<Addresses setUser={setUser} user={userInfo} />
								</div>
							)} />

							<Route path="/profile/newAddress" element={(
								<div id='profile-container'>
									<ProfileNav setUser={setUserInfo} />
									<NewAddress setUser={setUserInfo} user={userInfo} />
								</div>
							)} />
						</Route>
						
						<Route path="/login" element={<Login user={user} setOrders={setOrders} setUserInfo={setUserInfo} setUser={setUser} />} />
						<Route path="/signup" element={<SignUp />} />
						
						<Route path="/product/:idx" element={<Product data={products} setProducts={setProducts} user={userInfo} setUser={setUserInfo}/>} />
						<Route path="/cart" element={<Cart setProducts={setProducts} setUserInfo={setUserInfo} data={products} user={userInfo} setUser={setUserInfo}/>} />
						<Route path="/payment" element={<Payment  setOrders={setOrders} orders={orders} user={userInfo} products={products} setProducts={setProducts} setUser={setUserInfo}/>} />
						<Route path="/ordered" element={<Ordered />} />

						<Route path="/admin">
							{userInfo && userInfo.admin ? <Route path="stock" element={(
								<div id='admin-container'>
									<AdminNav />
									<Stock user={userInfo} setProducts={setProducts} products={products}/>
								</div>
							)} /> : <Route path='stock' element={<img style={{width: "100%"}} src="https://i.ibb.co/86fFFJn/saia-Invasor-jpg.png" alt="chad saia invasor" />} /> }
							
							{userInfo && userInfo.admin ? <Route path="addProduct" element={(
								<div id='admin-container'>
									<AdminNav />
									<AddProduct user={userInfo} />
								</div>
							)} /> : <Route path='addProduct' element={<img style={{width: "100%"}} src="https://i.ibb.co/86fFFJn/saia-Invasor-jpg.png" alt="chad saia invasor" />} /> }
							
							{userInfo && userInfo.admin ? <Route path="removeProduct" element={(
								<div id='admin-container'>
									<AdminNav />
									<RemoveProduct user={userInfo} setProducts={setProducts} />
								</div>
							)} /> : <Route path='removeProduct' element={<img style={{width: "100%"}} src="https://i.ibb.co/86fFFJn/saia-Invasor-jpg.png" alt="chad saia invasor" />} />  }
							
							{userInfo && userInfo.admin ? <Route path="manageAdmins" element={(
								<div id='admin-container'>
									<AdminNav />
									<ManageAdmins user={user}/>
								</div>
							)} /> : <Route path='manageAdmins' element={<img style={{width: "100%"}} src="https://i.ibb.co/86fFFJn/saia-Invasor-jpg.png" alt="chad saia invasor" />} /> }

							{userInfo && userInfo.admin ? <Route path="editStock/:id" element={(
								<div id='admin-container'>
									<AdminNav />
									<EditStock user={userInfo} products={products} setProducts={setProducts} />
								</div>
							)} /> : <Route path='editStock/:id' element={<img style={{width: "100%"}} src="https://i.ibb.co/86fFFJn/saia-Invasor-jpg.png" alt="chad saia invasor" />} /> }
						</Route>
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
