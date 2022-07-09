import { useParams } from "react-router-dom";
import RowInfos from "../Common/rowInfos";
import ProdInput from "../Product/ProdInputs";
import MobileTable from "../Common/MobileTable";
import { useState } from "react";

const EditStock = ({products, setProducts}) => {
    const { id } = useParams();
    const idx = id;
    const colTitles = {key: "Código", name: "Nome", value: "Valor", qtt: "Quantidade", sold: "Vendidos"};
    const lengths = [15, 35, 10, 20, 20];
    const product = products[idx];
    let [prodInfos, setProdInfos] = useState({
        id: idx,
        name: product.name,
        price: product.price,
        stock: product.stock,
        sold: product.sold
    })

    // axios.create({ baseURL: "http://localhost:5000/product",
    //                headers: {"Content-Type": "application-json","x-access-token": localStorage.getItem('token')}
    // })
    // .getById(id)
    // .then(resp => {
    // setProd(resp.data)
    // })
    // .catch( e => {console.log(e)})

    return (  
        <div className="info-container">
            <div className="pc-table b-shadow">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                <RowInfos className={"info-row"} sizes={lengths} infos={prodInfos} />
            </div>
            <div className="mobile-table">
                {/* <MobileTable items={mobileProd} titles={colTitles} /> */}
            </div>
            <ProdInput setProdList={setProducts} prodList={products} prodId={product._id} product={prodInfos} />
        </div>
    );
}
 
export default EditStock;