import axios from 'axios'
import { useState } from "react";
import RowInfos from "../Common/rowInfos";
import MobileTable from "../Common/MobileTable";
import '../css/orders.css';

const Orders = () => {
    const [lengths, setLengths] = useState([10, 60, 20]);
    const colTitles = {key: "Pedido", status: "Status", value: "Valor"};

    // Trocar para dados do servidor
    // const [orders, setOrders] = useState([
    //     {key: 1, status: "Pedido entregue.", value: "R$ 88,90"},
    //     {key: 2, status: "Pedido entregue.", value: "R$ 88,90"},
    //     {key: 3, status: "Pedido saiu para entrega.", value: "R$ 88,90"},
    //     {key: 4, status: "Produto em separação", value: "R$ 88,90"}
    // ]);


    // RowInfos usa informações padronizadas(infos), tem que adaptar ou fazer um novo Component
    return ( 
        <div></div>
        // <div className="info-container">
        //     <div className="orders-filter">
        //         <input type="text" placeholder="Pedido de nº" />
        //     </div>
        //     <div className="b-shadow pc-table" id="orders">
        //         <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
        //         {
        //         orders.map((order) => {
        //             return (
        //                 <div key={order._id}>
        //                     <RowInfos className={"info-row"} sizes={lengths} infos={order} />
        //                 </div>
        //             );  
        //         })
        //         }
        //     </div>

        //     <div className="mobile-table">
        //         <MobileTable titles={colTitles} items={orders}/>
        //     </div>
        // </div>
    );
}
 
export default Orders;