import ProductSeries from "./ProductSeries";

const Homepage = () => {
    return ( 
        <div>
            <ProductSeries title="Populares" series={10} />
            <ProductSeries title="Gear Second" series={20} />
            <ProductSeries title="Gear Third" series={30} />
            <ProductSeries title="Gear Fourth" series={40} />
        </div>
    );
}
 
export default Homepage;