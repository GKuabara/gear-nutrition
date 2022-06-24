import '../css/cartItem.css'
import { useState, useEffect} from 'react';
import { productImages } from "../Common/images"

const CardItem = ({product, data, setData}) => {
    let [index, setIndex] = useState(0);

    let incNum = () => {
        console.log(data.cart)
        if(data.cart[product.indexProduct].quantity < 100) {
            let datacopy = data.cart;
            datacopy[product.indexProduct].quantity += 1;
            setData({...data, "cart": datacopy});
        }
    };

    let decNum = () => {
        if (data.cart[product.indexProduct].quantity === 1) {
            setData({...data, cart: data.cart.filter(function(product, cartIndex) {
                return index !== cartIndex;
            })});
        } else if(data.cart[product.indexProduct].quantity > 1) {
            let datacopy = data.cart;
            datacopy[product.indexProduct].quantity -= 1;
            setData({...data, "cart": datacopy});
        }
    }

    function updateQtt(e) {
        let datacopy = data.cart;
        datacopy[product.indexProduct].quantity = e.target.value;
        setData({...data, "cart": datacopy});
    }

    return ( 
        <div className='item-container'>
            <div className="products-pr-image"><img src={productImages[data.products[product.indexProduct].img]} alt='img'/></div>
                <span>{data.products[product.indexProduct].name}</span>
                <span id='cart-item-price'>R$ {data.products[product.indexProduct].price}</span>
            <div className='item-qntd'>
                <button className="decButton" type="button" onClick={decNum}>-</button>
                <input className='qntd' type='text' value={product.quantity} onChange={e => updateQtt(e)}></input>
                <button className="incButton" type="button" onClick={incNum}>+</button>
            </div>
                <span>R$ {(product.quantity * data.products[product.indexProduct].price).toFixed(2)}</span>
        </div>
    );
}
 
export default CardItem;