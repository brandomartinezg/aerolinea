import React from 'react';
import {formatDate, formatFlightTime, formatHour } from '../../util/formatter';
import Card from './Card';
import './Flights.scss';

const Flights = ({flights, onSelect}) => {
    // const onSelect = (e) => console.log('object');
    // const flightsFilters = useLocation();
    // flightsFilters.state
    return(
        <div className='flights-container'>
            {flights.map(f => {
                const [year, month, day] = f.date;
                const [hour, minutes] = f.hour;
                const [arrivalHour, arrivalMinutes] = f.arrivalTime;
                const [flightTimeHour, flightTimeMinutes] = f.flightTime;
                return(
                    <div className='fc-view' key={f.id}>
                        <Card 
                            price={f.price} 
                            date={`${formatDate(new Date(year, month, day))}`} 
                            hour={`${formatHour(hour, minutes)}`}
                            currency={f.currency}
                            item={f}
                            onSelect={onSelect}
                            arrivalTime={`${formatHour(arrivalHour, arrivalMinutes)}`}
                            flightTime={`${formatFlightTime(flightTimeHour, flightTimeMinutes)}`}
                        />
                    </div>
                );
            })}
        </div>
    );
}
export default Flights;