import './css/App.css';
import TopNavBar from './TopNavbar';
import BottomNavBar from './BottomNavbar';
import Footer from './Footer';
import Homepage from './Home';

function App() {
  const image = require('./media/imgs/whey.png');
  const product = {name: "Whey Protein Concentrado - Gear Second Buff (1KG)", price: "88,90", img: image}
  return (
    <div className="App">
      <TopNavBar/>
      <BottomNavBar/>
      <div className="content">
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
