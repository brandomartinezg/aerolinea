import React from 'react'
import { useSelector } from 'react-redux';
import { formatDateLarge } from '../../util/formatter';
import './Ticket.scss';

const Ticket = ({flightData}) => {
    const userData = useSelector(state => state.userData);
    const countries = useSelector(state => state.countries);
    const origin = countries.find(c => c.id === flightData.origin);
    const destination = countries.find(c => c.id === flightData.destination);
    const [year, month, day] = flightData.date;
    const [hour, minutes] = flightData.hour;
    return(
        <div className='ticket-container'>
            {origin && destination && userData &&
            <>
            <div className='tic-d'>{`Origen: ${origin.name}`}</div>
            <div className='tic-d'>{`Destino: ${destination.name}`}</div>
            <div className='tic-d'>{`Fecha: ${formatDateLarge(new Date(year, month, day, hour, minutes))}`}</div>
            <div className='tic-d'>{`Nombre: ${userData.name}`}</div>
            <div className='tic-d'>{`Apellido: ${userData.surname}`}</div>
            <div className='tic-d'>{`Email: ${userData.email}`}</div>
            </>}
        </div>)
}
export default Ticket;