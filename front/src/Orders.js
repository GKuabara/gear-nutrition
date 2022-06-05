import { useState } from "react";
import RowInfos from "./rowInfos";
import './css/orders.css';

const Orders = () => {
    const [colTitles, setColTitles] = useState(
        {key: "Pedido", status: "Status", value: "Valor"}
    );

    const [orders, setOrders] = useState([
        {key: 1, status: "Pedido entregue.", value: "R$ 88,90"},
        {key: 2, status: "Pedido entregue.", value: "R$ 88,90"},
        {key: 3, status: "Pedido saiu para entrega.", value: "R$ 88,90"},
        {key: 4, status: "Produto em separação", value: "R$ 88,90"}
    ]);

    const [lengths, setLengths] = useState([10, 60, 20]);

    return ( 
        <div className="orders-container">
            <div className="orders-filter">
                <input type="text" placeholder="Pedido de nº" />
            </div>
            <div id="orders">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                {
                orders.map((order) => {
                    return (
                        <div key={order.key}>
                            <RowInfos className={"info-row"} sizes={lengths} infos={order} />
                        </div>
                    );  
                })
                }
            </div>
        </div>
    );
}
 
export default Orders;