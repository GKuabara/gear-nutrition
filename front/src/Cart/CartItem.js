import '../css/cartItem.css'
import { useState, useEffect} from 'react';
import { productImages } from "../Common/images"
import ProductCard from '../Product/ProdCard';

const CardItem = ({product, data, setData}) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const [cartIndex, setCartIndex] = useState(0);

    useEffect(() => {
        data.cart.map((prod, idx) => {
            if (prod.indexProduct === product.indexProduct)
                setCartIndex(idx);
        })
    }, [data, product])

    const incNum = () => {
        setData({...data, cart: data.cart.map((prod, index) => {
            if (index === cartIndex)
                return {...prod, quantity: prod.quantity + 1};
            return prod;
        })})
        setQuantity(quantity + 1);
    }

    const decNum = () => {
        if (quantity > 1) {
            setData({...data, cart: data.cart.map((prod, index) => {
                if (index === cartIndex)
                    return {...prod, quantity: prod.quantity - 1};
                return prod;
            })})
            setQuantity(quantity - 1);
        }
        if (quantity === 1) {
            setData({...data, cart: data.cart.filter(function(product, index) {
                return index !== cartIndex;
            }
        )})}
    }

    return ( 
        <div className='item-container'>
            <div className="products-pr-image"><img src={productImages[data.products[product.indexProduct].img]} alt='img'/></div>
                <span>{data.products[product.indexProduct].name}</span>
                <span id='cart-item-price'>R$ {data.products[product.indexProduct].price}</span>
            <div className='item-qntd'>
                <button className="decButton" type="button" onClick={() => decNum()}>-</button>
                <input className='qntd' type='text' max={100} value={quantity} onChange={e => setQuantity(e.target.value)}></input>
                <button className="incButton" type="button" onClick={() => incNum()}>+</button>
            </div>
                <span>R$ {(product.quantity * data.products[product.indexProduct].price).toFixed(2)}</span>
        </div>
    );
}
 
export default CardItem;