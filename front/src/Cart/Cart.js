import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import MobileCartItem from './MobileCartItem';
import '../css/cart.css';

const Cart = (props) => {
    const data = props.data;
    const setData = props.setData;
    let [total, setTotal] = useState(0);

    useEffect(() => {
        let temp = 0, i = 0;
        while (i < data.cart.length) {
            temp += data.products[data.cart[i].indexProduct].price * data.cart[i].quantity;
            i++;
        }
        setTotal(temp);
    }, [data, total]);

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
                        data.cart.map((product, index) => {
                            return <CartItem product={product} data={data} setData={setData} key={index}/>
                        })
                    }
                </div>
                <div id="mobile-rows-container">
                    {
                        data.products.map((product, index) => {                            
                            return <MobileCartItem product={product} data={data} setData={setData} key={index}/>
                        })
                    }
                </div>
                <div id='table-total'>
                    <p>Total: R$ {total.toFixed(2)}</p>
                </div>
                <div id='keep-to-payment'>
                    <Link to="/payment">Continuar</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;