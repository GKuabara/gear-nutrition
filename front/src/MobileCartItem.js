import './css/cartItem.css'
import { useState, useEffect } from 'react';
import { productImages } from "./images"

const MobileCartItem = ({product, data, setData}) => {
    let [index, setIndex] = useState(0);

    useEffect(() => {
        data.products.map((prod, idx) => {
            if (prod.index === product.index)
                setIndex(idx++)
        })
    }, [data, product])

    let incNum = () => {
        if(data.products[index].qntd < 100) {
            let datacopy = data.products;
            datacopy[index].qntd += 1;
            setData({...data, "products": datacopy});
        }
    };

    let decNum = () => {
        if (data.products[index].qntd === 1) {
            setData({...data, products: data.products.filter(function(product, cartIndex) {
                return index !== cartIndex;
            })});
        } else if (data.products[index].qntd > 1) {
            let datacopy = data.products;
            datacopy[index].qntd -= 1;
            setData({...data, "products": datacopy});
        }
    }

    function updateQtt(e) {
        let datacopy = data.products;
        datacopy[index].qntd = e.target.value;
        setData({...data, "products": datacopy});
    }

    return ( 
        <div className='mobile-item-container'>
            <div className='mobile-cart-item-upper'>
                <div className="cart-product-image"><img src={productImages[product.img]} alt=''/></div>
                <div className='mobile-cart-item-name'>
                    <p>{product.name}</p>
                    <p className='cart-item-price'>R$ {product.price}</p>
                </div>
            </div>
            <div className='mobile-cart-item-lower'>
                <div className='mobile-cart-item-qntd'>
                    <button className="decButton" type="button" onClick={decNum}>-</button>
                    <input className='qntd' type='text' value={data.products[index].qntd} onChange={e => updateQtt(e)}></input>
                    <button className="incButton" type="button" onClick={incNum}>+</button>
                </div>
                <span>R$ {(data.products[index].qntd * product.price).toFixed(2)}</span>
            </div>
        </div>
    );
}
 
export default MobileCartItem;