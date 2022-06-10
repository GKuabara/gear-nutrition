import './css/App.css';
import TopNavBar from './TopNavbar';
import BottomNavBar from './BottomNavbar';
import Footer from './Footer';
import Profile from './Profile';
import Homepage from './Home';
import NewAddress from './NewAddress';
import TMB from './Tmb';
import ChangePwd from './ChangePwd';
import Orders from './Orders';
import Stock from './Stock';
import Admin from './Admin';

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <BottomNavBar/>
      <div className="content">
        <Admin />
        {/* <TMB /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
