import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { formatDate } from '../../util/formatter';
import Button from '../common/button/Button';
import Dropdown from '../common/dropdown/Dropdown';
import PeopleSelector from './PeopleSelector';
import './Reservations.scss';
import Schedule from './Schedule';

const Reservations = ({onSearch}, ref) => {
    const countries = useSelector(state => state.countries);
    const [originSelected, setOriginSelected] = useState(undefined);
    const [destinationSelected, setDestinationSelected] = useState(undefined);
    const [date, setDate] = useState(new Date());
    const refPeopleSelector = useRef(null);
    const refDdOriging = useRef(null);
    const refDdDestination = useRef(null);
    const handleOnSearch = () =>{
        onSearch({idOrigin: originSelected.id, idDestination: destinationSelected.id, date: formatDate(date) });
    }
    useImperativeHandle(ref,() => ({
        getPeopleSelected: () => {
            return refPeopleSelector.current.getPeople()
        },
        restoreDefault: () => {
            setOriginSelected(undefined);
            setDestinationSelected(undefined);
            refDdOriging.current.resetSelection();
            refDdDestination.current.resetSelection();
        }
    }),[]);

    return(
        <div className='reservation-container'>
            <div className='rc-filters-container'>
                <div className='rc-filters'>
                    <div className='rc-origin'>
                        <div className='rco-text'>{'Aeropuerto de salida'}</div>
                        {/* <Input onChange={(e) => setFilterOrigin(e.target.value)}/> */}
                        <Dropdown onSelect={(e) => setOriginSelected(e)} options={countries} ref={refDdOriging} placeholder={'Origen'}/>
                    </div>
                    <div className='rc-destination'>
                        <div className='rcd-text'>{'Aeropuerto de llegada'}</div>
                        {/* <Input onChange={(e) => setFilterText(e.target.value)}/> */}
                        <Dropdown onSelect={(e) => setDestinationSelected(e)} options={countries} ref={refDdDestination} placeholder={'Destino'}/>
                    </div>
                </div>
                {originSelected !== undefined && destinationSelected !== undefined && 
                <div className='rc-secondfilter'>
                    <Schedule onChange={(value) => setDate(value)}/>
                    <PeopleSelector ref={refPeopleSelector}/>
                </div>}
            </div>
            <div className='rc-button'>
                <Button 
                    onClick={(e) => handleOnSearch(e)} 
                    color={'primary'} 
                    disabled={originSelected === undefined || destinationSelected === undefined}
                >
                    {'Buscar...'}
                </Button>
            </div>
        </div>
    );
}

export default forwardRef(Reservations);