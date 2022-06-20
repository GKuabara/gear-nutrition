import { useState } from 'react';
import './css/cart.css';
import CartItem from './CartItem';
import MobileCartItem from './MobileCartItem';
import database from './data.json';

const Cart = () => {
    const [data, setData] = useState(database);
    
    let total = 1000;
    let calculateTotal = () => {
        
    };

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
                        data.products.map((product, index) => {
                            return <CartItem product={product} data={data} setData={setData} key={index}/>
                        })
                    }
                </div>
                <div id="mobile-rows-container">
                    {
                        data.products.map((product, index) => {
                            return <MobileCartItem prod={product} data={data} setData={setData} key={index}/>
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