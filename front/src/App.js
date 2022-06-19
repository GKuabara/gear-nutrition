import './css/App.css';
import TopNavBar from './TopNavbar';
import BottomNavBar from './BottomNavbar';
import Footer from './Footer';
import Profile from './Profile';
import Homepage from './Home';
import NewAddress from './NewAddress';
import Login from './LoginPage'
import SignUp from './SignUp'

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <BottomNavBar/>
      <div className="content">
        {/* <Homepage /> */}
        {/* <Profile /> */}
        {/* <NewAddress /> */}
        <Login/>
        {/* <SignUp/> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
