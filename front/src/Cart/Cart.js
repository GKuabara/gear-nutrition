import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import MobileCartItem from './MobileCartItem';
import Prod from '../services/product';
import User from '../services/user';
import '../css/cart.css';

const Cart = ({data, user, setProducts, setUserInfo}) => {
    let [total, setTotal] = useState(0)
    let navigate = useNavigate();

    
    if (data.length === 0) Prod.fetchProducts(setProducts)
    if (user === null) User.fetchUser(setUserInfo)

    useEffect(() => {            
        if (user === null || data === null) return

        setTotal(0)
        let subTotal = 0
        user.cart.map ((cartItem) => {
            data.map((dataItem) => {
                if (cartItem.id === dataItem._id) {
                    subTotal += cartItem.qtt * dataItem.price 
                }
            })
        })
        setTotal(subTotal)
    }, [data, user]);

    function finishOrder() {
        if (total === 0) return
        else navigate("/payment", {state: {total}});
    }

    return (
        user && <div id='cart-container'>
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
                            return <CartItem data={data} product={product} user={user} setUser={setUserInfo} key={index}/>
                        })
                    }
                </div>
                <div id="mobile-rows-container">
                    {
                        user.cart.map((product, index) => {                            
                            return <MobileCartItem data={data} product={product} user={user} setUser={setUserInfo} key={index}/>
                        })
                    }
                </div>
                <div id='table-total'>
                    <p>Total: R$ {total.toFixed(2)}</p>
                </div>
                <div id='keep-to-payment'>
                    <button onClick={() => finishOrder()}>Continuar</button>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;