import './css/cartItem.css'
import { useState, useEffect} from 'react';
import { productImages } from "./images"

const CardItem = ({product, data, setData}) => {
    let [num, setNum] = useState(product.qntd);
    let [index, setIndex] = useState(0);

    useEffect(() => {
        let i = 0;
        while (i < data.products.length) {
            if (data.products[i].index === product.index)
                setIndex(i++);
        }
    }, [data, product])

    let incNum = () => {
        if(num < 100) {
            let datacopy = data.products;
            datacopy[index].qntd += 1;
            setNum(num + 1);
            setData({...data, "products": datacopy});
        }
    };

    let decNum = () => {
        if (num === 1) {
            setData({...data, products: data.products.filter(function(product, cartIndex) {
                return index !== cartIndex;
            })});
        }
        if(num > 1) {
            let datacopy = data.products;
            datacopy[index].qntd -= 1;
            setNum(num - 1);
            setData({...data, "products": datacopy});
        }
    }

    return ( 
        <div className='item-container'>
            <div className="products-pr-image"><img src={productImages[product.img]} alt='img'/></div>
                <span>{product.name}</span>
                <span id='cart-item-price'>R$ {product.price}</span>
            <div className='item-qntd'>
                <button className="decButton" type="button" onClick={decNum}>-</button>
                <input className='qntd' type='text' value={num} onChange={e => setNum(e.target.value)}></input>
                <button className="incButton" type="button" onClick={incNum}>+</button>
            </div>
                <span>R$ {(product.qntd * product.price).toFixed(2)}</span>
        </div>
    );
}
 
export default CardItem;