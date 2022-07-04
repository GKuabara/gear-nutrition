import axios from 'axios';
import '../css/cartItem.css'
import { useState, useEffect } from 'react';
import { productImages } from "../Common/images"

const MobileCartItem = ({product, data, user, setUser}) => {
    const [quantity, setQuantity] = useState(product.qtt);
    
    let prod = data.filter((item) => { 
        return item._id === product.id
    })[0]

    const updateQuantity = (quantity) => {
        let newCart = user.cart.map(item => {
            if (item.id === prod._id) {
                item.qtt = quantity
            }
            return item
        })
        newCart = newCart.filter(item => { return item.qtt !== 0 })

        // Por algum motivo, quando tiramos o ultimo item do carrinho, o useEffect não era triggerado
        // Então atualizamos o banco por aqui mesmo
        if (quantity === 0 && user.cart.length === 1) {
            const body = {
                "name": user.name,
                "email": user.email,
                "password": user.password,
                "admin": user.admin,
                "CPF": user.CPF,
                "number": user.number,
                "street": user.street,
                "neighborhood": user.neighborhood,
                "CEP": user.CEP,
                "city": user.city,
                "state": user.state,
                "telephone": user.telephone,
                "cart": [],
                "token": localStorage.getItem('token')
            }
    
            const url =  "http://localhost:5000/user/" + localStorage.getItem('id')
            axios.put( url, body )
            .then(resp => {
                setQuantity(getCartProd())
            })
            .catch(e => {
                console.log(e)
            })
            setUser({...user, cart: []})
        } else {
            let newUser = {...user, cart: newCart.filter(item => { return item.qtt !== 0 })}
            if (user !== newUser) 
                setUser(newUser)
        }
    }
    
    function getCartProd() {
        const cartLen = user.cart.length
        for (let i = 0; i < cartLen; i++)
            if (user.cart[i].id === prod._id) {
                return user.cart[i].qtt;
            }
    }

    useEffect(() => {
        const body = {
            "name": user.name,
            "email": user.email,
            "password": user.password,
            "admin": user.admin,
            "CPF": user.CPF,
            "number": user.number,
            "street": user.street,
            "neighborhood": user.neighborhood,
            "CEP": user.CEP,
            "city": user.city,
            "state": user.state,
            "telephone": user.telephone,
            "cart": user.cart,
            "token": localStorage.getItem('token')
        }

        const url =  "http://localhost:5000/user/" + localStorage.getItem('id')
        axios.put( url, body )
        .then(resp => {
            setQuantity(getCartProd())
        })
        .catch(e => {
            console.log(e)
        })
    }, [user])

    return ( 
        <div className='mobile-item-container'>
            <div className='mobile-cart-item-upper'>
                <div className="cart-product-image"><img src={prod.img} alt=''/></div>
                <div className='mobile-cart-item-name'>
                    <p>{prod.name}</p>
                    <p className='cart-item-price'>R$ {prod.price}</p>
                </div>
            </div>
            <div className='mobile-cart-item-lower'>
                <div className='mobile-cart-item-qntd'>
                    <button className="decButton" type="button" onClick={() => setQuantity(quantity - 1)}>-</button>
                    <input className='qntd' type='text' value={quantity} onChange={e => setQuantity(e.target.value)}></input>
                    <button className="incButton" type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <span>R$ {(product.qtt * prod.price).toFixed(2)}</span>
            </div>
        </div>
    );
}
 
export default MobileCartItem;