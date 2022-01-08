import React from 'react'
import './Dropdown.scss';

const Dropdown = ({children, onselect}) => {
    const onChange = (event) => {
        onselect(event.target.value);
    }
    return(
        <select onChange={onChange} className='dropdown-container'>
            {children}
        </select>
    );
}

export const Option = ({children, value}) => {
    return(
        <option value={value} className='ddc-option'>
            {children}
        </option>
    );
}

export default Dropdown;