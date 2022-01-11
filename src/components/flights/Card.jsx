import React from 'react';
import Button from '../common/button/Button';
import './Card.scss';

const Card = (props) => {
    return(
        <div className='card-container'>
            <div>{`Hora de salida: ${props.hour}`}</div>
            <div>{`Hora de llegada: ${props.arrivalTime}`}</div>
            <div>{`Tiempo de vuelo: ${props.flightTime}`}</div>
            <div>{`Fecha: ${props.date}`}</div>
            <div>{`Precio: ${props.price} ${props.currency}`}</div>
            <Button color={'secondary'} onClick={() => props.onSelect(props.item)}>{'Seleccionar'}</Button>
        </div>
    );
}
export default Card;