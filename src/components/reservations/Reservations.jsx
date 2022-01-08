import React from 'react'
import { useSelector } from 'react-redux';
import Button from '../common/button/Button';
import Dropdown, { Option } from '../common/dropdown/Dropdown';
import Input from '../common/input/Input';
import useFilter from '../hooks/useFilter';
import './Reservations.scss';

const Reservations = () => {
    const countries = useSelector(state => state.countries);
    const [countriesFiltered, setFilterOrigin] = useFilter(countries, 'name');
    const [countriesFilteredDest, setFilterText] = useFilter(countries, 'name');
    return(
        <div className='reservation-container'>
            <div className='rc-origin'>
                <div className='rco-text'>{'Aeropuerto de salida'}</div>
                <Input onChange={(e) => setFilterOrigin(e.target.value)}/>
                <Dropdown onselect={(e) => console.log(e)}>
                    {countriesFiltered.map(c => (
                        <Option value={c.id} key={c.id}>{c.name}</Option>
                    ))}
                </Dropdown>
            </div>
            <div className='rc-destination'>
                <div className='rcd-text'>{'Aeropuerto de llegada'}</div>
                <Input onChange={(e) => setFilterText(e.target.value)}/>
                <Dropdown onselect={(e) => console.log(e)}>
                    {countriesFilteredDest.map(c=> (
                        <Option key={c.id} value={c.id}>{c.name}</Option>
                    ))}
                </Dropdown>
            </div>
            <Button onClick={console.log('object')}>{'Buscar...'}</Button>
        </div>
    );
}

export default Reservations;