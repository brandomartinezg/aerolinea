import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cleanSelectedFlights, deleteSeletedFlight } from '../../actions';
import { formatDateLarge } from '../../util/formatter';
import Button from '../common/button/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../common/modal/Modal';
import PurchaseFormat from '../purchaseFormat/PurchaseFormat';
import Item from './Item';
import './ShoppingCart.scss';

const ShoppingCart = () => {
    const myReservations = useSelector(state => state.selectedFlights);
    const countries = useSelector(state => state.countries);
    const total = myReservations.reduce((acc, curr) => acc + ((curr.people.adults+curr.people.children)*curr.price), 0);
    const [show, setShow] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const dispatch = useDispatch();
    const handleOnDelete = (id) => {
        dispatch(deleteSeletedFlight(id));
    }
    const handleCleanShopping = () => {
        dispatch(cleanSelectedFlights())
    }
    const handleOnBuy = (id) => {
        setShow(true)
    }
    return(
        <div className='shoppingCart-container'>
            {myReservations.length === 0?
            <div>{'No hay elementos en tu carrito'}</div>:
            <div className='scc-items'>
                <div className='ssci-wrapper'>
                    {myReservations.map(r => {
                        const [year, month, day] = r.date;
                        const [hour, minutes] = r.hour;
                        const origin = countries.find(c => c.id === r.origin).name;
                        const destination = countries.find(c => c.id === r.destination).name;
                        const dateLarge = formatDateLarge(new Date(year, month, day, hour, minutes));
                        return(
                            <Item 
                                key={r.id} 
                                origin={origin} 
                                destination={destination} 
                                date={dateLarge} 
                                travellers={r.people} 
                                price={r.price}
                                currency={r.currency}
                                id={r.id}
                                onDelete={handleOnDelete}
                                onBuy={handleOnBuy}
                            />
                        );
                    })}
                </div>
            </div>}
            {myReservations.length >0 && 
            <div className='sc-footer'>
                <div className='scci-action'>
                    <Button size={'xl'} color={'tertiary'} onClick={() => handleCleanShopping()}>{'Limpiar carrito'}</Button>
                </div>
                <div className='scf-total'>
                    {`Total: ${total} ${myReservations[0].currency}`}
                </div>
            </div>}
            <Modal show={show} setShow={setShow}>
                <ModalHeader>
                    {'Datos del comprador'}
                </ModalHeader>
                <ModalBody>
                    <PurchaseFormat setIsValid={setIsValid}/>
                </ModalBody>
                <ModalFooter>
                    <div className='modal-buttons'>
                        <Button color={'tertiary'} onClick={() => setShow(false)}>{'Cancelar'}</Button>
                        <Button disabled={!isValid} color={'secondary'}>{'Reservar'}</Button>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default ShoppingCart;