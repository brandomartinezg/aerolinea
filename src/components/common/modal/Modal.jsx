import React, { useRef, useEffect, useState } from 'react';
import './Modal.scss';

const Modal = ({children, show, setShow}) => {
    const wrapperRef = useRef(null);
    useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setShow(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown',    handleClickOutside);
		};
	}, [wrapperRef]);
    return(
    <div className={`modal-content ${show ? 'show':''}`}>
        <div className='mc-wrappercontent' ref={wrapperRef}>
            {children}
        </div>
    </div>);
};
export const ModalHeader = ({children}) => {
    return(
        <div className='mc-modalHeader'>{children}</div>
    )
};
export const ModalBody = ({children}) => {
    return(
        <div className='mc-modalBody'>
            {children}
        </div>
    )
};
export const ModalFooter = ({children}) => {
    return(
    <div className='mc-modalFooter'>
        {children}
    </div>);
};
export default Modal;