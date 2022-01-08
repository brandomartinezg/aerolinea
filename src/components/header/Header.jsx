import React from 'react'
import './Header.scss';
import airplane from '../../icons/airplane.svg'

const Header = () => {
    return(
        <div className='header-container'>
            <img src={airplane} alt='airplane' className='hc-airplane-icon'/>
            <h1 className='hc-text'>
                {'Viva volaris emirates flights'}
            </h1>
        </div>
    );
}

export default Header;