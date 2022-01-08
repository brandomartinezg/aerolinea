import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { setCountries } from '../actions';
import './Airport.scss';
import Header from './header/Header';
import Reservations from './reservations/Reservations';

const Airport = () => {
    // const hasCountries = useSelector(state => state.countries.length);
    const dispatch = useDispatch();
    const mockdestinations = [
        {id:1, name:"Ciudad de México"},
        {id:2, name: "Aguascalientes"},
        {id:3, name: "Baja California"},
        {id:4, name: "Baja California Sur"},
        {id:5, name: "Campeche"},
        {id:6, name: "Chiapas"}
    ];
    useEffect(() => {
        dispatch(setCountries(mockdestinations));
    }, []);
    return(
        <div className='airport-container'>
            <Header/>
            <Reservations/>
        </div>
    );
}

export default Airport;