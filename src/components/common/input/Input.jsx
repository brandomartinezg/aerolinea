import React from 'react'
import './input.scss';
import searchIcon from '../../../icons/search.svg';

const Input = ({onChange}) => {
    return(
        <div className='input-container'>
            <img src={searchIcon} className='ic-icon' alt='search'/>
            <input type={'text'} onChange={onChange} className='ic-text' placeholder='Buscar...'/>
        </div>
    );
}

export default Input;