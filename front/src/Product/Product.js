import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/product.css';

const Product = () => {
    const item = {
        id: '1',
        name: "Whey Protein Concentrado (1KG)",
        description: "O Whey Protein Concentrado Gear Nutrition possui um perfil nutricional completo e um sabor real, ideal para ser consumido pré/pós treinos, como um snack prático, ou em suas receitas.",
        price: "88,90",
        img: require('../media/imgs/whey.png'),
        sold: 312321
    }

    let [num, setNum]= useState(1);
    let incNum = () => {
        if(num < 100) {setNum(num + 1);}
    };
    let decNum = () => {
        if(num > 0) {setNum(num - 1);}
    }
    let handleChange = (e)=> {
        setNum(e.target.value);
    }
    
    return ( 
        <div id='product-container'>
            <div id='prod-img'>
                <img src={item.img} alt='item-img'></img>
            </div>
            <div id='prod-info'>
                <h1>{item.name}</h1>
                <p id='prod-desc'>{item.description}</p>
                <p id='prod-sold'>itens vendidos: {item.sold}</p>
                <p id='prod-price'>Por: R${item.price}</p>
                <div id='prod-info-row'>
                    <div id='prod-info-left'>
                        <button id="decButton" type="button" onClick={decNum}>-</button>
                        <input id='qntd' type='text' value={num} onChange={handleChange}></input>
                        <button id="incButton" type="button" onClick={incNum}>+</button>
                    </div>
                    <Link to="/cart" id='buyButton'>Comprar</Link>
                </div>
                {/* <Link to='/cart'>Comprar</Link> */}
            </div>
        </div>
    );
}
 
export default Product;