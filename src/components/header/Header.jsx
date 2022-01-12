import React from 'react'
import './Header.scss';
import shoppingCart from '../../icons/shopping-cart.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import paperAirplane from '../../images/paper-plane.png';

const Header = () => {
    const flightsSelected = useSelector(state => state.selectedFlights);
    const navigate = useNavigate();
    return(
        <div className='header-container'>
            <div className='hc-brand-container' onClick={() => navigate('/aerolinea')}>
                <img src={paperAirplane} alt='airplane' className='hc-airplane-icon'/>
                <h1 className='hc-text'>
                    {'Cennet Air'}
                </h1>
            </div>
            <div className='hc-shopping-cart-container' onClick={() => navigate('ShoppingCart')}>
                <img src={shoppingCart} alt='shopping-cart' className='hc-shoppingcart-icon'/>
                <div className={`hcs-notification ${flightsSelected.length === 0 ? 'hidden':''}`}>
                    <div className='hcsn-text'>{flightsSelected.length}</div>
                </div>
            </div>
        </div>
    );
}

export default Header;