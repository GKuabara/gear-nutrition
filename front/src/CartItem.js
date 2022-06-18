import './css/cartItem.css'
import { useState } from 'react';

const CardItem = (props) => {
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
        <div className='item-container'>
            <div className="cart-product-image"><img src={product.img} alt=''/></div>
                <span>{product.name}</span>
                <span id='cart-item-price'>R$ {product.price}</span>
            <div className='item-qntd'>
                <button className="decButton" type="button" onClick={decNum}>-</button>
                <input className='qntd' type='text' value={num} onChange={handleChange}></input>
                <button className="incButton" type="button" onClick={incNum}>+</button>
            </div>
                <span>R$ {(num * product.price).toFixed(2)}</span>
        </div>
    );
}
 
export default CardItem;