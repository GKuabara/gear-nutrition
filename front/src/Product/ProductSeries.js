import ProductCard from './ProdCard';
import '../css/prodSeries.css';

const ProductSeries = (props) => {
    const series = props.series;
    const data = props.data;
    const setData = props.setData;
    const prodImg = require('../media/imgs/whey.png');

    let products = [
        {name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg, key: 1 + series},
        {name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg, key: 2 + series},
        {name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg, key: 3 + series},
        {name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg, key: 4 + series}
    ];

    return ( 
        <div id={"g" + series} className="product-series">
            <h1>{props.title}</h1>
            <div className="prod-row">
                {
                    data.products.map((product) => {
                        return (
                            <div className="productCard" key={product.index}>
                                <ProductCard prod={product} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
 
export default ProductSeries;