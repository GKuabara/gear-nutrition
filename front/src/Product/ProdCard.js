import { Link } from 'react-router-dom';
import { productImages } from "../Common/images"
import '../css/prodCard.css'

const ProductCard = (props) => {
    const product = props.prod;

    return ( 
        <Link to="/product" state={{ name: product.name }}>
            <div className='prod-container'>
                <div className="productImage"><img src={productImages[product.img]} alt='imagem' /></div>
                <div className='np-container'>
                    <h3>{product.name}</h3>
                    <h2>R$ {product.price}</h2>
                </div>
            </div>
        </Link>
     );
}
 
export default ProductCard;