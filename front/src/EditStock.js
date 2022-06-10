import { useParams } from "react-router-dom";
import RowInfos from "./rowInfos";
import './css/editStock.css';
import TextInput from "./TextInput";

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
            <div id="edition">
                <TextInput size={{width: 48, height: 40}} placeholder={product.name} title="Nome" />
                <TextInput size={{width: 28, height: 40}} placeholder={product.value} title="Valor" />
                <TextInput size={{width: 20, height: 40}} placeholder="1000" title="Adicionar" />
                <div id="text-area">
                    <span style={{marginLeft: "2%"}}>Descrição</span>
                    <textarea style={{
                        width: "98%", 
                        marginLeft: "1%",
                        padding: "5px",
                        fontWeight: "500",
                        resize: "none", 
                        borderRadius: "5px", 
                        border: "1px solid grey"
                    }} placeholder={product.placeholder} cols="30" rows="10"> </textarea>
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </div>
            </div>
        </div>
    );
}
 
export default EditStock;