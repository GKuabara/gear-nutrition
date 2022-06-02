import './css/prodCard.css'

const ProductCard = (props) => {
    const product = props.prod;
    const name = product.name;
    const price = product.price;
    const img = product.img
    return ( 
        <div className="productCard">
            <div className="productImage"><img src={img} /></div>
            <h3>{name}</h3>
            <h2>R$ {price}</h2>
        </div>
     );
}
 
export default ProductCard;