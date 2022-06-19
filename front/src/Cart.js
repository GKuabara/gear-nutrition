import { Link } from 'react-router-dom';
import { useState } from 'react';
import './css/cart.css';
import CartItem from './CartItem';
import MobileCartItem from './MobileCartItem';

const Cart = (props) => {
    // const items = props.series;
    const prodImg = require('./media/imgs/whey.png');

    let [products, setProducts] = useState([
        {key: 1, name: "Whey Protein Concentrado (1KG)", price: 88.90, img: prodImg},
        {key: 2, name: "Creatina Monidratada (250g)", price: 45.90, img: prodImg},
    ]);
    
    let total = 100000;
    return (
        <div id='cart-container'>
            <div id='table-container'>
                <h1 id='cart-title'>Carrinho</h1>
                <div id='header-container'>
                    <span id='prod-span'>Produto</span>
                    <span>Preço</span>
                    <span>Quantidade</span>
                    <span>Subtotal</span>
                </div>
                <div id="rows-container">
                    {
                        products.map((product) => {
                            return <CartItem prod={product}/>
                        })
                    }
                </div>
                <div id="mobile-rows-container">
                    {
                        products.map((product) => {
                            return <MobileCartItem prod={product}/>
                        })
                    }
                </div>
                <div id='table-total'>
                    <p>Total: R$ {total}</p>
                </div>
                <div id='keep-to-payment'>
                    <button>Continuar</button>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;