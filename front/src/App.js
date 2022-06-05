import './css/App.css';
import TopNavBar from './TopNavbar';
import BottomNavBar from './BottomNavbar';
import Footer from './Footer';
import Profile from './Profile';
import Homepage from './Home';

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <BottomNavBar/>
      <div className="content">
        {/* <Homepage /> */}
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
