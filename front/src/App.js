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

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        {/* <Homepage /> */}
        {/* <Profile /> */}
        {/* <NewAddress /> */}
        {/* <Login/> */}
        {/* <TMB /> */}
        {/* <Admin /> */}
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
