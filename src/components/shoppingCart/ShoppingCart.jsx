import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cleanSelectedFlights, deleteSeletedFlight, setUserData } from '../../actions';
import { formatDateLarge } from '../../util/formatter';
import Button from '../common/button/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../common/modal/Modal';
import PurchaseFormat from '../purchaseFormat/PurchaseFormat';
import Item from './Item';
import './ShoppingCart.scss';
import Ticket from './Ticket';

const ShoppingCart = () => {
    const myReservations = useSelector(state => state.selectedFlights);
    const countries = useSelector(state => state.countries);
    const total = myReservations.reduce((acc, curr) => acc + ((curr.people.adults+curr.people.children)*curr.price), 0);
    const [show, setShow] = useState(false);
    const [idBuy, setIdBuy] = useState(0);
    const [idDelete, setIdDelete] = useState(0);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalReservation, setShowModalReservation] = useState(false);
    const [isMultiple, setIsMultiple] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const handleOnDelete = (id) => {
        setIdDelete(id);
        setShowModalDelete(true);
    }
    const deleteReservation = () => {
        isMultiple ? dispatch(cleanSelectedFlights()) : dispatch(deleteSeletedFlight(idDelete));
        setShowModalDelete(false);
    }
    const handleCleanShopping = () => {
        setIsMultiple(true);
        setShowModalDelete(true);
    }
    const handleOnBuy = (id) => {
        setShow(true);
        setIdBuy(id);
    }
    const handleOnCloseForm = () => {
        setShow(false);
        formRef.current.resetInputs();
    }
    const handleEndForm = () => {
        const user = formRef.current.getUserData();
        setShow(false);
        setShowModalReservation(true);
        
        dispatch(setUserData(user));
        formRef.current.resetInputs();
    }
    const handleOnAceptBuy= () => {
        setShowModalReservation(false);
        dispatch(deleteSeletedFlight(idBuy));
        setIdBuy(0);
    }
    return(
        <div className='shoppingCart-container'>
            {myReservations.length === 0?
            <div className='scc-noitems'>{'No hay elementos en tu carrito'}</div>:
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
                    <PurchaseFormat setIsValid={setIsValid} ref={formRef}/>
                </ModalBody>
                <ModalFooter>
                    <div className='modal-buttons'>
                        <Button color={'tertiary'} onClick={() => handleOnCloseForm(false)}>{'Cancelar'}</Button>
                        <Button disabled={!isValid} color={'primary'} onClick={() => handleEndForm()}>{'Reservar'}</Button>
                    </div>
                </ModalFooter>
            </Modal>
            <Modal show={showModalReservation} setShow={setShowModalReservation}>
                <ModalHeader>
                    {'¡Gracias por tu reserva!'}
                </ModalHeader>
                <ModalBody>
                    {myReservations.find(f => f.id === idBuy) && <Ticket flightData={myReservations.find(f => f.id === idBuy)}/>}
                </ModalBody>
                <ModalFooter>
                    <div className='modal-buttonsAcept'>
                        <Button onClick={() => handleOnAceptBuy()} color={'primary'}>{'Aceptar'}</Button>
                    </div>
                </ModalFooter>
            </Modal>
            <Modal show={showModalDelete} setShow={setShowModalDelete}>
                <ModalHeader>
                    {isMultiple ? 'Eliminar reservaciones de vuelo': 'Eliminar resarvación del vuelo'}
                </ModalHeader>
                <ModalBody>
                    {isMultiple ? '¿Desea eliminar las reservaciones de su carrito de compra?' :
                     '¿Desea eliminar la reservación de su carrito de compras?'}
                </ModalBody>
                <ModalFooter>
                    <div className='modal-buttonsDelete'>
                        <Button color={'tertiary'} onClick={() => setShowModalDelete(false)}>{'Cancelar'}</Button>
                        <Button color={'primary'} onClick={() => deleteReservation()}>{'Continuar'}</Button>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default ShoppingCart;