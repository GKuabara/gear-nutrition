import './css/cartItem.css'

const CardItem = (props) => {
    const product = props.prod;
    const name = product.name;
    const price = product.price;
    const img = product.img;

    return ( 
        <div className='item-container'>
            <div className="productImage"><img src={img} /></div>
            <h3>{name}</h3>
            <h2>R$ {price}</h2>
            <div id='item-qntd'>
                    <button id="decButton" type="button" onClick={decNum}>-</button>
                    <input id='qntd' type='text' value={num} onChange={handleChange}></input>
                    <button id="incButton" type="button" onClick={incNum}>+</button>
                </div>
        </div>
     );
}
 
export default CardItem;