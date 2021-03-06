import { useState } from "react";
import RowInfos from "../Common/rowInfos";
import MobileTable from "../Common/MobileTable";
import '../css/orders.css';

const Orders = ({orders, user}) => {
    const [lengths, setLengths] = useState([10, 60, 20]);
    const colTitles = {key: "Pedido", status: "Status", value: "Valor"};

    return ( 
        <div className="info-container">
            <div className="b-shadow pc-table" id="orders">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                {
                orders.map((order, idx) => {
                    let item = {
                        key: idx + 1,
                        status: order.status === 'done' ? "Pedido entregue" : "Pedido realizado",
                        price: order.price
                    }
                    return (
                        <div key={"" + order._id + idx}>
                            <RowInfos className={"info-row"} id={order._id} sizes={lengths} infos={item} />
                        </div>
                    );  
                })
                }
            </div>

            {/* <div className="mobile-table">
                <MobileTable titles={colTitles} items={orders}/>
            </div> */}
        </div>
    );
}
 
export default Orders;