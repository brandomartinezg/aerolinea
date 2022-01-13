import React, {useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountries, setFlights, setSelectedFlight, updateSelectedFlight } from '../actions';
import { getCountries, getFlights } from '../requests/countriesRequest';
import './Airport.scss';
import Button from './common/button/Button';
import Modal, { ModalFooter, ModalHeader } from './common/modal/Modal';
import Flights from './flights/Flights';
import Reservations from './reservations/Reservations';

const Airport = () => {
    const dispatch = useDispatch();
    const [flightsFiltered, setFlightsFiltered] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const flightsSelected = useSelector(state => state.selectedFlights);
    const refReservation = useRef(null);
    const flightsState = useSelector(state => state.flights);
    const [isUpdate, setIsUpdate] = useState(false);
    const onSearch = (data) => {
        const [year, month, day] = data.date.split('-').map(n => parseInt(n, 10));
        setFlightsFiltered(flightsState.filter(f => 
            f.origin === data.idOrigin && f.destination === data.idDestination && 
            f.date[0] === year && f.date[1] === month && f.date[2] === day)
            );
        
    }
    useEffect(() => {
        getCountries().then(resp => {
            dispatch(setCountries(resp.data.countries));
        },error => {
            console.log(error);
        });
        getFlights().then(resp => {
            dispatch(setFlights(resp.data.flights));
        }, error => {
            console.log(error);
        });
    }, []);
    const handleOnSelect= (item) => {
        item.people = refReservation.current.getPeopleSelected();
        const flightSelected = flightsSelected.find(c => c.id === item.id);
        if(flightSelected !== undefined){
            dispatch(updateSelectedFlight(item));
            setIsUpdate(true);
        }
        else{
            dispatch(setSelectedFlight(item));
            setIsUpdate(false);
        }
        refReservation.current.restoreDefault();
        setShowModal(true);
    }
    const handleCleanSearch = () => {
        refReservation.current.restoreDefaultAll();
        setFlights(null);
    }
    return(
        <div className='airport-container'>
            <Reservations onSearch={onSearch} cleanSearch={handleCleanSearch} ref={refReservation}/>
            <Flights flights={flightsFiltered} onSelect={handleOnSelect}/>
            <Modal show={showModal} setShow={setShowModal}>
                <ModalHeader>
                    {isUpdate ? 'La reserva del vuelo se actualizó': 'El vuelo se guardó en tu carrito'}
                </ModalHeader>
                <ModalFooter>
                    <div className='button-footer'>
                        <Button color={'primary'} onClick={() => setShowModal(false)}>{'Aceptar'}</Button>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Airport;