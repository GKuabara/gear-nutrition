import './css/App.css';
import ProductCard from './ProdCard';
import TopNavBar from './TopNavbar';
import BottomNavBar from './BottomNavbar';
import Footer from './Footer';

function App() {
  const image = require('./media/imgs/whey.png');
  const product = {name: "Whey Protein Concentrado - Gear Second Buff (1KG)", price: "88,90", img: image}
  return (
    <div className="App">
      <TopNavBar/>
      <BottomNavBar/>
      <ProductCard prod={product} />
      <Footer />
    </div>
  );
}

export default App;
