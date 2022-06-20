import '../css/selectionInput.css';
import Select from 'react-select';

const SelectionInput = ({hasError, id, onChange, size, values, title}) => {
    const selectTheme = (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: 'white',
            primary: hasError ? 'lightcoral' : '#0B3075',
        },
    });

    return ( 
        <div className="form-input" style={{width: size}}>
            <span>{title}: </span>
            <Select id={id} onChange={ e=>onChange(e.value) } theme={selectTheme} options={values} />
        </div>
    );
}
 
export default SelectionInput;