import React from 'react'
import './NotFound.scss';
import image404 from '../images/404NotFound.jpg';

const NotFound = () => {
    return(
        <div className='not-found-container'>
            <div className='nf-text'>{'404'}</div>
            <img src={image404} alt='404' className='nf-image'/>
        </div>
    );
}

export default NotFound;