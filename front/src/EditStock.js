import { useParams } from "react-router-dom";
import RowInfos from "./rowInfos";
import ProdInput from "./ProdInputs";
import './css/editStock.css';

const EditStock = () => {
    const { id } = useParams();
    const idx = id - 1;
    const colTitles = {key: "Código", name: "Nome", value: "Valor", qtt: "Quantidade", sold: "Vendidos", desc: "Descrição"};
    const stock = [
        {key: 1, name: "Whey Isolado", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"},
        {key: 2, name: "Whey Protein Concentrado", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"},
        {key: 3, name: "Whey Protein", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"},
        {key: 4, name: "Tapioca", value: "R$ 88,90", qtt: 500, sold: 1000, desc: "Lorem Ipsum Dolor Sit Amet"}
    ];
    const lengths = [12, 18, 15, 20, 15, 20];
    const product = stock[idx];

    return (  
        <div id="edition-container">
            <div id="cur-prod">
                <RowInfos className={"row-titles"} sizes={lengths} infos={colTitles} />
                <RowInfos className={"info-row"} sizes={lengths} infos={stock[idx]} />
            </div>
            <ProdInput product={product} />
        </div>
    );
}
 
export default EditStock;