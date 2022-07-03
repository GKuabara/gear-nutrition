import ProductCard from './ProdCard';
import '../css/prodSeries.css';

const ProductSeries = ({title, series, data}) => {

    return ( 
        <div id={series} className="product-series">
            <h1>{title}</h1>
            <div className="prod-row">
                {
                    data.map((product, idx) => {
                        if (series === product.series) {
                            return (
                                <div className="productCard" key={product._id}>
                                    <ProductCard idx={idx} product={product} />
                                </div>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
}
 
export default ProductSeries;