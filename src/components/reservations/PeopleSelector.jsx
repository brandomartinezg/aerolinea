import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import './PeopleSelector.scss';
import plus from '../../icons/plus.svg';
import minus from '../../icons/minus.svg';
import person from '../../icons/person.svg';
import useCounter from '../../hooks/useCounter';
import { formatPlural } from '../../util/formatter';

const PeopleSelector = (props, ref) => {
    const [openSelector, setOpenSelector] = useState(false);
    const wrapperRef = useRef(null);
    const [counterAdult, incrementAdult, decrementAdult, resetAdults] = useCounter();
    const [counterChildren, incrementChildren, decrementChildren,resetChild, hasChild] = useCounter(0);
    useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setOpenSelector(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);
    useImperativeHandle(ref,() => ({
        getPeople: () => {
            return {adults: counterAdult, children: counterChildren}
        },
        resetPeople: () => {
            resetAdults();
            resetChild();
        }
    }),[counterAdult, counterChildren,resetAdults,resetChild]);
    return(
        <div className={`people-selector-container ${props.openCalendar ? 'hidden': ''}`} ref={wrapperRef}>
            <div onClick={() => setOpenSelector(true)} className='psc-text'>
                <img src={person} alt='person' className='psc-iconperson'/>
                {`${counterAdult} Adulto${formatPlural(counterAdult)}`}
                {hasChild && `, ${counterChildren} niño${formatPlural(counterChildren)}`}
            </div>
            <div className={`ps-selector ${openSelector ? '': 'hidden'}`}>
                <div className='ps-adult'>
                    <div className='psc-text-adult'>{'Adultos'}</div>
                    <img 
                        src={minus} 
                        alt='minus' 
                        className={`psa-minus ${counterAdult === 1 ? 'disabled': ''}`} 
                        onClick={() => { counterAdult > 1 && decrementAdult()}}
                    />
                    <div className='psc-a-counter'>{counterAdult}</div>
                    <img src={plus} alt='plus' className={`psa-plus`} onClick={() => incrementAdult()}/>
                </div>
                <div className='ps-children'>
                    <div className='psc-text-children'>{'Niños'}</div>
                    <img src={minus} alt='minus' className={`psc-minus ${!hasChild ? 'disabled': ''}`} onClick={() => decrementChildren()}/>
                    <div className='psc-c-counter'>{counterChildren}</div>
                    <img src={plus} alt='plus' className='psc-plus' onClick={() => incrementChildren()}/>
                </div>
            </div>
        </div>
    );
}
export default forwardRef(PeopleSelector);