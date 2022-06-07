import { useState } from "react";
import RowInfos from "./rowInfos";
import './css/stock.css';

const Stock = () => {
    const colTitles = {key: "Código", name: "Nome", value: "Valor", qtt: "Quantidade", sold: "Vendidos", desc: "Descrição"};
    
    const [stock, setStock] = useState([
        {key: 1, name: "Whey Isolado", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"},
        {key: 2, name: "Whey Protein Concentrado", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"},
        {key: 3, name: "Whey Protein", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"},
        {key: 4, name: "Tapioca", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"}
    ]);

    const lengths = [15, 20, 15, 15, 15, 20];

    let [classes, setClasses] = useState(["info-row"])
    function makeSelected(key) {
        console.log(key, "selecionada")
        // const curSelection = document.querySelector(".selected");
        // console.log(curSelection)
        // if (curSelection !== null) {
        //     curSelection.class = "info-row";
        //     curSelection.style.border = "1px solid grey"
        // }
        const newSelection = document.getElementById(key)
        setClasses(['info-row selected']);
        newSelection.style.border = "1px solid var(--vermelho)";
    }

    return (  
        <div id="stock-container">
            <input type="text" placeholder="Pesquisar por código"/>
            <div id="stock">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                {
                stock.map((product) => {
                    return (
                        <div onMouseUp={() => {makeSelected(product.key)}} id={product.key} key={product.key}>
                            <RowInfos className={classes} sizes={lengths} infos={product} />
                        </div>
                    );  
                })
                }
            </div>
        </div>
    );
}
 
export default Stock;