import ProductSeries from "./Product/ProductSeries";
import './css/home.css';

const Homepage = () => {
    return ( 
        <div className="home-container">
            <ProductSeries title="Populares" series={10} />
            <ProductSeries title="Gear Second" series={20} />
            <ProductSeries title="Gear Third" series={30} />
            <ProductSeries title="Gear Fourth" series={40} />
        </div>
    );
}
 
export default Homepage;