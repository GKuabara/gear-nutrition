import '../css/rowInfos.css';

const RowInfos = ({id, className, sizes, infos}) => {
    let values = []
    for (const key in infos) 
        values.push(infos[key]);

    const key = infos["key"];
    return ( 
        <div className={className}>
            {
            values.map((info, index) => {
                const curKey = "" + id + toString(key) + index;
                return (
                    <div style={
                        {width: sizes[index] + "%"}
                    } className="info-col" key={curKey}>{info}</div>
                );
            })
            }
        </div>
    );
}
 
export default RowInfos;