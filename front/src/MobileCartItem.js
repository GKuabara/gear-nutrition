import './css/cartItem.css'
import { useState } from 'react';

const MobileCartItem = (props) => {
    const product = props.prod;

    let [num, setNum] = useState(1);
    let incNum = () => {
        if(num < 100) {setNum(num + 1);}
    };
    let decNum = () => {
        if(num > 0) {setNum(num - 1);}
    }
    let handleChange = (e)=> {
        setNum(e.target.value);
    }

    return ( 
        <div className='mobile-item-container'>
            <div className='mobile-cart-item-upper'>
                <div className="cart-product-image"><img src={product.img} alt=''/></div>
                <div className='mobile-cart-item-name'>
                    <p>{product.name}</p>
                    <p className='cart-item-price'>R$ {product.price}</p>
                </div>
            </div>
            <div className='mobile-cart-item-lower'>
                <div className='mobile-cart-item-qntd'>
                    <button className="decButton" type="button" onClick={decNum}>-</button>
                    <input className='qntd' type='text' value={num} onChange={handleChange}></input>
                    <button className="incButton" type="button" onClick={incNum}>+</button>
                </div>
                <span>R$ {(num * product.price).toFixed(2)}</span>
            </div>
        </div>
    );
}
 
export default MobileCartItem;