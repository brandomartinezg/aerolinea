import React from 'react'
import './Button.scss';

const Button = ({children, onClick}) => {
    return(
        <div className='button-container'>
            <button onClick={() => onClick()} className='bc-action'>{children}</button>
        </div>
    );
}

export default Button;