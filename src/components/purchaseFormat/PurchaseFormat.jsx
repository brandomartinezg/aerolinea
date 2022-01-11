import React, { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import './PurchaseFormat.scss';

const PurchaseFormat = ({setIsValid}) => {
    const [name,isValidName, setName] = useInput();
    const [surname,isValidSurname, setSurname] = useInput();
    const [address,isValidAddress, setAddress] = useInput();
    const [email,isValidEmail, setEmail] = useInput('email');
    useEffect(() => {
        if(isValidName && isValidSurname && isValidEmail)
            setIsValid(true);
        else
            setIsValid(false);
    },[isValidName, isValidSurname, isValidEmail]);
    return(
        <div className='purchase-container'>
            <div className='pc-name'>
                <div className='pcn-text'>{'Nombre(s)'}<div className='pcn-required'>{'*'}</div></div>
                <input className='pcn-input' value={name} onChange={(val) => setName(val.target.value)} type={'text'} maxLength={20} placeholder='Introduzca su nombre'/>
            </div>
            <div className='pc-surname'>
                <div className='pcs-text'>{'Apellidos'}<div className='pcs-required'>{'*'}</div></div>
                <input className='pcs-input' value={surname} onChange={(val) => setSurname(val.target.value)} type={'text'} maxLength={25} placeholder='Introduzca sus apellidos'/>
            </div>
            <div className='pc-address'>
                <div className='pca-text'>{'Dirección'}<div className='pca-required'>{'*'}</div> </div>
                <input className='pca-input' value={address} onChange={(val) => setAddress(val.target.value)} type={'text'} maxLength={75} placeholder='Introduzca su dirección'/>
            </div>
            <div className='pc-email'>
                <div className='pce-text'>{'Correo electrónico'}<div className='pce-required'>{'*'}</div></div>
                <input className='pce-input' value={email} onChange={(val) => setEmail(val.target.value)} type={'email'} maxLength={50} placeholder='Introduzca su correo electrónico'/>
            </div>
        </div>
    );
}
export default PurchaseFormat;