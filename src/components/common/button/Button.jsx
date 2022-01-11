import React from 'react'
import './Button.scss';

const Button = ({children, onClick, color, disabled, size}) => {
    return(
        <div className={`button-container ${disabled ? 'disabled':''}`}>
            <button onClick={() => onClick()} className={`bc-action  ${color} ${size}`} disabled={disabled}>{children}</button>
        </div>
    );
}

export default Button;