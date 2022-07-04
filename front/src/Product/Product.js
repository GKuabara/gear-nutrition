import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { productImages } from "../Common/images"
import '../css/product.css';

const Product = ({data, user, setUser}) => {
    const location = useLocation();
    const [qntd, setQntd]= useState(1);
    const { idx } = location.state;
    const prod = data[idx]

    let incQntd = () => {if(qntd < 100) {setQntd(qntd + 1);}}
    let decQntd = () => {if(qntd > 0) {setQntd(qntd - 1);}}
    let handleChange = (e)=> {setQntd(e.target.value);}

    function addToCart() {
        let duplicate = false
        let cartCopy = JSON.parse(JSON.stringify(user.cart))
        cartCopy.map((item, idx) => {
            if (item.id === prod._id) {
                duplicate = true
                cartCopy[idx].qtt += qntd
            }
        })

        if (!duplicate) {
            cartCopy.push({id: prod._id, qtt: qntd})
        }

        localStorage.removeItem('cart')
        localStorage.setItem('cart', JSON.stringify(cartCopy))
        setUser({...user, cart: cartCopy})
    }

    return ( 
        <div id='product-container'>
            <div id='prod-img'>
                <img src={prod.img} alt='product-img'></img>
            </div>
            <div id='prod-info'>
                <h1>{prod.name}</h1>
                <p id='prod-desc'>{prod.desc}</p>
                <p id='prod-sold'>itens vendidos: {prod.sold}</p>
                <p id='prod-price'>Por: R${prod.price}</p>
                <div id='prod-info-row'>
                    <div id='prod-info-left'>
                        <button id="decButton" type="button" onClick={decQntd}>-</button>
                        <input id='qntd' type='text' value={qntd} onChange={handleChange}></input>
                        <button id="incButton" type="button" onClick={incQntd}>+</button>
                    </div>
                    <Link to="/cart" state={{ idx: idx }} id='buyButton' onClick={() => addToCart()}>Comprar</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Product;