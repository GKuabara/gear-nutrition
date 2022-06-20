import './css/mobileTable.css';

const MobileTable = ({selection, setSelection, titles, items}) => {
    const tableTitles = Object.values(titles);
    function select(item) {
        if (setSelection)
            setSelection(item.key)
    }

    return (  
        <div style={{width: "100%"}}>
            {
            items.map((item, idx) => {   
                return (
                    <div onClick={() => {select(item)}} key={idx} className={"item b-shadow" + (selection === item.key ? " selected" : "")}>
                        {Object.keys(item).map((key, i) => {
                            return (
                                <div key={"" + idx + i} className={"item-row table-" + key}>
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