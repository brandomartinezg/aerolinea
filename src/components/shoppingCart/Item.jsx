import React from 'react'
import { formatPlural } from '../../util/formatter';
import Button from '../common/button/Button';
import './Item.scss';

const Item = ({origin, destination, date, travellers, price, currency, id, onDelete, onBuy}) => {
    const total = (travellers.adults + travellers.children) * price;
    return(
        <div className='item-container'>
            <div className='ic-text-o-d'>
                <div className='ic-text-o'>{`${origin}`}</div>
                <div className='ic-text-dash'>{'-'}</div>
                <div className='ic-text-d'>{`${destination}`}</div>
            </div>
            <div className='ic-text-date'>{`${date}`}</div>
            <div className='ic-travellers-price'>
                <div className='ic-text-travellers'>
                    <div className='ict-adults'>{`${travellers.adults} Adulto${formatPlural(travellers.adults)}`}</div>
                    {travellers.children > 0 && 
                    <div className='ict-children'>{`${travellers.children} Niño${formatPlural(travellers.children)}`}</div>}
                </div>
                <div className='ic-text-price'>{`${price} ${currency}`}</div>
            </div>
            <div className='ic-total'>
                <div className='ict-text'>{'Total'}</div>
                <div className='ict-price'>{`${total} ${currency}`}</div>
            </div>
            <div className='ic-actions'>
                <Button color={'tertiary'} onClick={() => onDelete(id)}>{'Eliminar'}</Button>
                <Button color={'primary'} onClick={() => onBuy(id)}>{'Comprar'}</Button>
            </div>
        </div>
    );
}
export default Item;