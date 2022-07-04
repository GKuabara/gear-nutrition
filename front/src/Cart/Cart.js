import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import MobileCartItem from './MobileCartItem';
import '../css/cart.css';

const Cart = ({data, user, setUser}) => {
    // let [total, setTotal] = useState(0);

    useEffect(() => {
        let temp = 0, i = 0;
        user.cart.map ((cartItem) => {
            data.map((dataItem) => {
                if (cartItem._id == dataItem._id)
                    temp += cartItem.qtt * dataItem.price
            })
        })
        // setTotal(temp);
    }, [data, user]);

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
                        user.cart.map((product, index) => {
                            return <CartItem data={data} product={product} user={user} setUser={setUser} key={index}/>
                        })
                    }
                </div>
                <div id="mobile-rows-container">
                    {/* {
                        user.cart.map((product, index) => {                            
                            return <MobileCartItem data={data} product={product} user={user} setUser={setUser} key={index}/>
                        })
                    } */}
                </div>
                <div id='table-total'>
                    <p>Total: R$ 12</p>
                </div>
                <div id='keep-to-payment'>
                    <Link to="/payment">Continuar</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;