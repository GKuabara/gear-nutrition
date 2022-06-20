import { Link } from 'react-router-dom';
import './css/prodCard.css'

const ProductCard = (props) => {
    const product = props.prod;
    const name = product.name;
    const price = product.price;
    const img = product.img
    return ( 
        <Link to="/product">
            <div className='prod-container'>
                <div className="productImage"><img src={img} /></div>
                <div className='np-container'>
                    <h3>{name}</h3>
                    <h2>R$ {price}</h2>
                </div>
            </div>
        </Link>
     );
}
 
export default ProductCard;