import React, {useEffect, useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import { setCountries, setSelectedFlight } from '../actions';
import './Airport.scss';
import Flights from './flights/Flights';
import Reservations from './reservations/Reservations';

const Airport = () => {
    const dispatch = useDispatch();
    const [flights, setFlights] = useState([]);
    const refReservation = useRef(null);
    const today = new Date();
    const mockdestinations = [
        {id:1, name:"Ciudad de México"},
        {id:2, name: "Aguascalientes"},
        {id:3, name: "Baja California"},
        {id:4, name: "Baja California Sur"},
        {id:5, name: "Campeche"},
        {id:6, name: "Chiapas"}
    ];
    const mockFlights = [
        {id:1, origin: 1, destination: 2, date:[today.getFullYear(), today.getMonth()+1, today.getDate()], hour:[12, 1], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0]},
        {id:2, origin: 1, destination: 2, date:[today.getFullYear(), 1, 11], hour:[14, 25], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0]},
        {id:3, origin: 1, destination: 2, date:[today.getFullYear(), today.getMonth()+1, today.getDate()], hour:[18, 0], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:4, origin: 1, destination: 2, date:[today.getFullYear(), 1, 11], hour:[20, 25], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:5, origin: 1, destination: 2, date:[today.getFullYear(), 1, 11], hour:[20, 25], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },

        {id:6, origin: 1, destination: 3, date:[today.getFullYear(), 1, 11], hour:[12, 10], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:7, origin: 1, destination: 3, date:[today.getFullYear(), today.getMonth()+1, today.getDate()], hour:[15, 15], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:8, origin: 1, destination: 3, date:[today.getFullYear(), today.getMonth()+1, today.getDate()], hour:[18, 0], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:9, origin: 1, destination: 3, date:[today.getFullYear(), 1, 11], hour:[22, 35], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        
        {id:10, origin: 1, destination: 4, date:[today.getFullYear(), 1, 11], hour:[12, 35], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:11, origin: 1, destination: 4, date:[today.getFullYear(), 1, 11], hour:[15, 55], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:12, origin: 1, destination: 4, date:[today.getFullYear(), today.getMonth()+1, today.getDate()], hour:[18, 52], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:13, origin: 1, destination: 4, date:[today.getFullYear(), today.getMonth()+1, today.getDate()], hour:[23, 45], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },

        {id:14, origin: 1, destination: 5, date:[today.getFullYear(), today.getMonth()+1, 11], hour:[10, 45], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:15, origin: 1, destination: 5, date:[today.getFullYear(), today.getMonth()+1, 11], hour:[11, 45], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:16, origin: 1, destination: 5, date:[today.getFullYear(), today.getMonth()+1, 11], hour:[12, 45], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:17, origin: 1, destination: 5, date:[today.getFullYear(), today.getMonth()+1, 11], hour:[13, 45], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },

        {id:18, origin: 1, destination: 6, date:[today.getFullYear(), today.getMonth()+1, 11], hour:[10, 45], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:19, origin: 1, destination: 6, date:[today.getFullYear(), today.getMonth()+1, 11], hour:[11, 45], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:20, origin: 1, destination: 6, date:[today.getFullYear(), today.getMonth()+1, 11], hour:[12, 45], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },
        {id:21, origin: 1, destination: 6, date:[today.getFullYear(), today.getMonth()+1, 11], hour:[13, 45], price:100, currency: 'MXN', arrivalTime:[13,1], flightTime:[1,0] },

    ];
    const onSearch = (data) => {
        const [year, month, day] = data.date.split('-').map(n => parseInt(n, 10));
        setFlights(mockFlights.filter(f => 
            f.origin === data.idOrigin && f.destination === data.idDestination && 
            f.date[0] === year && f.date[1] === month && f.date[2] === day)
            );
        
    }
    useEffect(() => {
        dispatch(setCountries(mockdestinations));
    }, []);
    const handleOnSelect= (item) => {
        item.people = refReservation.current.getPeopleSelected();
        dispatch(setSelectedFlight(item));
        refReservation.current.restoreDefault();
        setFlights([]);
    }
    return(
        <div className='airport-container'>
            <Reservations onSearch={onSearch} ref={refReservation}/>
            <Flights flights={flights} onSelect={handleOnSelect}/>
        </div>
    );
}

export default Airport;