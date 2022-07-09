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

    const updateStock = () => {
        products.map(prod => {
            user.cart.map((userProd) => {
                if (prod._id === userProd.id) {
                    if (prod.stock - userProd.qtt === 0) {
                        Product.deleteProduct(prod._id)
                        return
                    }

                    let newProd = {...prod, stock: prod.stock - userProd.qtt}
                    newProd = {...newProd, sold: prod.sold + userProd.qtt}
                    newProd.token = localStorage.getItem('token')
                    console.log(newProd)
                    Product.updateStock(userProd.id, newProd, products, setProducts)
                }
            })
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
        Orders.newOrder(newOrder, orders, setOrders, emptyCart)
        updateStock()
    }

    return (
        <div id='payment-finish'>
            <p>Previsão de entrega<br/>00/00/0000</p>
            <Link to="/ordered" id='payment-buyButton' onClick={() => finishOrder()}>Finalizar Pedido</Link>
        </div>
    );
}

export default PaymentFinish;