import './css/App.css';
import ProductCard from './prodCard'
import TopNavBar from './topNavbar'

function App() {
  const image = require('./media/imgs/whey.png');
  const product = {name: "Whey Protein Concentrado - Gear Second Buff (1KG)", price: "88,90", img: image}
  return (
    <div className="App">
      <TopNavBar/>
      <ProductCard prod={product} />
    </div>
  );
}

export default App;
