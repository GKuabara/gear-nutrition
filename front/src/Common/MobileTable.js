import '../css/mobileTable.css';

const MobileTable = ({selection, setSelection, products, items, titles, users}) => {
    const tableTitles = Object.values(titles);
    function select(item) {
        if (products)
            setSelection({id: products[item.id]._id, idx: item.id})
        else if (users)
            setSelection({id: users[item.id - 1]._id, idx: item.id})
    }

    return (  
        <div style={{width: "100%"}}>
            {
            items.map((item, idx) => {
                return (
                    <div onClick={() => {select(item)}} key={idx} className={"item b-shadow" + (selection && selection.idx === item.key || selection.idx === item.id ? " selected" : "")}>
                        {Object.keys(item).map((key, i) => {
                            return (
                                <div key={"m" + idx + i} className={"item-row table-" + key}>
                                    <div className="item-title">
                                        {tableTitles[i]}
                                    </div>
                                    <div className="item-info">
                                        {item[key]}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                );
            })
            }
        </div>
    );
}
 
export default MobileTable;