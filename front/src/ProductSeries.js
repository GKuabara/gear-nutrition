import ProductCard from './ProdCard';
import {useState} from 'react';
import './css/prodSeries.css';

const ProductSeries = (props) => {
    const series = props.series;
    const prodImg = require('./media/imgs/whey.png');

    let [products, setProducts] = useState([
        {name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg, key: 1 + series},
        {name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg, key: 2 + series},
        {name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg, key: 3 + series},
        {name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg, key: 4 + series}
    ]);

    return ( 
        <div id={"g" + series} className="product-series">
            <h1>{props.title}</h1>
            {
                products.map((product) => {
                    return (
                        <div className="productCard" key={product.key}>
                            <ProductCard prod={product} />
                        </div>
                    );
                })
            }
        </div>
    );
}
 
export default ProductSeries;