import { useState } from "react";
import { Link } from "react-router-dom";
import RowInfos from "./rowInfos";
import MobileTable from "./MobileTable";
import './css/stock.css';

const Stock = () => {
    const colTitles = {key: "Código", name: "Nome", value: "Valor", qtt: "Quantidade", sold: "Vendidos", desc: "Descrição"};
    
    const [stock, setStock] = useState([
        {key: 1, name: "Whey Isolado", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"},
        {key: 2, name: "Whey Protein Concentrado", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"},
        {key: 3, name: "Whey Protein", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"},
        {key: 4, name: "Tapioca", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"}
    ]);

    const lengths = [12, 18, 15, 20, 15, 20];

    let [selection, setSelection] = useState(1);
    return (  
        <div className="info-container">
            <input type="text" placeholder="Pesquisar por código"/>
            <div className="pc-table b-shadow">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                {
                stock.map((product) => {
                    return (
                        <div className={selection === product.key ? "info-row selected" : "info-row"} onClick={() => {setSelection(product.key)}} id={product.key} key={product.key}>
                            <RowInfos sizes={lengths} infos={product} />
                        </div>
                    );  
                })
                }
            </div>
            <div className="mobile-table">
                <MobileTable selection={selection} setSelection={setSelection} items={stock} titles={colTitles} />
            </div>
            <Link to={`/admin/editStock/${selection}`} >Editar</Link>
        </div>
    );
}
 
export default Stock;