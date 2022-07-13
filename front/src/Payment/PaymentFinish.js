import { Link } from 'react-router-dom';
import '../css/payment.css'
import User from '../services/user'
import Orders from '../services/orders'
import Product from '../services/product'

const PaymentFinish = ({products, setProducts, orders, setOrders, total, user, setUser}) => {
    const emptyCart = () => {
        User.updateUser({...user, cart: []})
        setUser({...user, cart: []})
    }

    const updateStock = async () => {
        products.map(prod => {
            let userProd = user.cart.filter(uProd => { return prod._id === uProd.id })
            if (userProd.length === 1) {
                userProd = userProd[0]
                let newProd = {...prod, stock: prod.stock - userProd.qtt}
                newProd = {...newProd, sold: prod.sold + userProd.qtt}
                newProd.token = localStorage.getItem('token')
                Product.updateStock(userProd.id, newProd, products, setProducts)
                console.log('Estoque atualizado', newProd)
            }
        })
    } 

    const finishOrder = () => {
        const newOrder = {
            token: localStorage.getItem('token'),
            customer: localStorage.getItem('id'),
            status: 'created',
            orders: user.cart.map((prod) => {
                return {
                    product: prod.id,
                    quantity: prod.qtt
                }
            }),
            price: total.toFixed(2)
        }
        updateStock()
        Orders.newOrder(newOrder, orders, setOrders, emptyCart)
    }

    return (
        <div id='payment-finish'>
            <p>Previsão de entrega<br/>00/00/0000</p>
            <Link to="/ordered" id='payment-buyButton' onClick={() => finishOrder()}>Finalizar Pedido</Link>
        </div>
    );
}

export default PaymentFinish;