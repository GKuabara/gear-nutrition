import ProductSeries from "./Product/ProductSeries";
import './css/home.css';

const Homepage = ({data, setData}) => {
    return ( 
        <div className="home-container">
            <ProductSeries title="Populares" series={10} data={data} setData={setData} />
            <ProductSeries title="Gear Second" series={20} data={data} setData={setData} />
            <ProductSeries title="Gear Third" series={30} data={data} setData={setData} />
            <ProductSeries title="Gear Fourth" series={40} data={data} setData={setData} />
        </div>
    );
}
 
export default Homepage;