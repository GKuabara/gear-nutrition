import { Link } from 'react-router-dom';
import { useState } from 'react';
import './css/cart.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const items = props.series;
    const prodImg = require('./media/imgs/whey.png');

    let [products, setProducts] = useState([
        {key: 1, name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg},
        {key: 2, name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg},
        {key: 3, name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg},
        {key: 4, name: "Whey Protein Concentrado (1KG)", price: "88,90", img: prodImg}
    ]);

    let [num, setNum]= useState(1);
    let incNum = () => {
        if(num < 100) {setNum(num + 1);}
    };
    let decNum = () => {
        if(num > 0) {setNum(num - 1);}
    }
    let handleChange = (e)=> {
        setNum(e.target.value);
    }
    let total = 10
    
    return ( 
        <div id='cart-container'>
            <h1 id='cart-title'>Carrinho</h1>
            <div id='header-container'>
                <h2>Produto</h2>
                <h2>Preço</h2>
                <h2>Quantidade</h2>
                <h2>Subtotal</h2>
            </div>
            <div id="table-container">
                {
                    products.map((product) => {
                        return <div className="item-row" key={product.key}><CartItem prod={product}/></div>
                    })
                }
            </div>
            <div id='table-total'>
                <p>Total: {total}</p>
            </div>
            <div id='keep-to-payment'>
                <button>Continuar</button>
            </div>
        </div>
    );
}
 
export default Cart;